import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Read
export const GET = async (req) => {
  try {
    let { searchParams } = new URL(req?.url);
    let id = searchParams.get("id");
    console.log("route full", searchParams); //6721dd3e8fe7ea9ee04af3ef
    console.log("route id", id); // 6721
    let result = await prisma.news_list.findMany({ where: { catID: id } });
    return NextResponseModified(StatusCodes.OK, result);
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
