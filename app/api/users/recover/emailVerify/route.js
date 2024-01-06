import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
import { sendMail } from "@/utility/email";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Create
export const POST = async (req, res) => {
  try {
    let reqData = await req.json();
    let count = await prisma.users.count({ where: reqData });
    if (count === 1) {
      const generatedOTP = Math.floor(100000 + Math.random() * 900000)
        .toString()
        .slice(0, 6);
      let emailSendStatus = await sendMail(
        `Password Recovery Code - Nexus`,
        `amatulmoula98@gmail.com`,
        `Your OTP Code is ${generatedOTP}`
      );
      let updateOTPstatus = await prisma.users.update({
        where: reqData,
        data: { otp: generatedOTP },
      });
      if (emailSendStatus === 1 && updateOTPstatus) {
        return NextResponseModified(StatusCodes.OK);
      } else {
        return NextResponseModified(StatusCodes.BAD_REQUEST);
      }
    } else {
      return NextResponseModified(StatusCodes.BAD_REQUEST);
    }
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
