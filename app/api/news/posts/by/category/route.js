import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Read
export const GET = async (req) => {
  try {
    let { searchParams } = new URL(req?.url);
    let id = parseInt(searchParams.get("id"));
    let result = await prisma.news_list.findMany({ where: { catID: id } });
    return NextResponseModified(StatusCodes.OK, result);
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
