import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
import { headers } from "next/headers";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();

// Create
export const GET = async (req, res) => {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    let result = await prisma.users.findUnique({ where: { id: id } });
    return NextResponseModified(StatusCodes.OK, result);
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};
