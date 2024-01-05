import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
import { decodeToken, encodeToken } from "@/utility/tokenEncodeDecode";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Create
export const POST = async (req, res) => {
  try {
    let reqData = await req.json();
    let result = await prisma.users.findUnique({ where: reqData });
    if (result) {
      let token = await encodeToken(result?.id, result?.email);
      // result.payload = await decodeToken(result.token);
      let cookieExpireTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      let cookieString = `token=${token}; expires=${cookieExpireTime.toUTCString()}; path=/`;
      return NextResponseModified(StatusCodes.OK, result, {
        "set-cookie": cookieString,
      });
    } else {
      return NextResponseModified(StatusCodes.BAD_REQUEST);
    }
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
