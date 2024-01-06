import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
import { decodeToken, encodeToken } from "@/utility/tokenEncodeDecode";
import { sendMail } from "@/utility/email";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Create
export const POST = async (req, res) => {
  try {
    let reqData = await req.json();
    let count = await prisma.users.count({ where: reqData });
    if (count === 1) {
      return NextResponseModified(StatusCodes.OK);
    } else {
      return NextResponseModified(StatusCodes.BAD_REQUEST);
    }
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
