import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Create
export const POST = async (req, res) => {
  try {
    let reqData = await req.json();
    let result = await prisma.users.update({
      where: { email: reqData["email"], otp: reqData["otp"] },
      data: { password: reqData["password"], otp: "0" },
    });
    return NextResponseModified(StatusCodes.OK, result);
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
