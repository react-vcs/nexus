import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponseModified } from "@/utility/nextResponse";
export const dynamic = "force-dynamic";
let prisma = new PrismaClient();
// Create
// export const POST = async (req, res) => {
//   try {
//     let reqData = await req.json();
//     let result = await prisma.socials.create({
//       data: reqData,
//     });
//     return NextResponseModified(StatusCodes.CREATED, result);
//   } catch (e) {
//     return NextResponseModified(StatusCodes.BAD_REQUEST);
//   }
// };
// Read
export const GET = async (req, res) => {
  try {
    let { searchParams } = new URL(req?.url);
    let id = searchParams.get("id");
    let result = await prisma.news_list.findUnique({ where: { id: id } });
    return NextResponseModified(StatusCodes.OK, result);
  } catch (e) {
    return NextResponseModified(StatusCodes.BAD_REQUEST);
  }
};

// // Update
// export const PUT = async (req, res) => {
//   try {
//     let { searchParams } = new URL(req?.url);
//     let id = parseInt(searchParams.get("id"));
//     let reqData = await req.json();
//     let result = await prisma.socials.update({
//       where: { id: id },
//       data: reqData,
//     });
//     return NextResponseModified(StatusCodes.OK, result);
//   } catch (e) {
//     return NextResponseModified(StatusCodes.BAD_REQUEST);
//   }
// };

// // Delete
// export const DELETE = async (req, res) => {
//   try {
//     let { searchParams } = new URL(req?.url);
//     let id = parseInt(searchParams.get("id"));
//     let result = await prisma.socials.delete({
//       where: { id: id },
//     });
//     return NextResponseModified(StatusCodes.OK, result);
//   } catch (e) {
//     return NextResponseModified(StatusCodes.BAD_REQUEST);
//   }
// };
