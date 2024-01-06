import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Read
export const GET = async (req) => {
  try {
    let { searchParams } = new URL(req?.url);
    let type = searchParams.get("type");
    let result = await prisma.news_list.findMany({ where: { type: type } });
    return NextResponseModified(StatusCodes.OK, result);
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
