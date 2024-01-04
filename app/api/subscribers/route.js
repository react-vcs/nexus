import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
let prisma = new PrismaClient();
// Create
export const POST = async (req, res) => {
  try {
    let reqData = await req.json();

    let result = await prisma.subscribers.createMany({
      data: reqData,
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (e) {
    console.error("An Error Occurs", e);
    return NextResponse.json({
      status: "Fail",
      data: "An Issue Occurs",
    });
  }
};
// Read
export const GET = async (req, res) => {
  try {
    let result = await prisma.subscribers.findMany();
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.error({
      status: "Error",
      message: "An error occurred while processing the request.",
    });
  }
};
// Update
export const PUT = async (req, res) => {
  try {
    let { searchParams } = new URL(req?.url);
    let id = parseInt(searchParams.get("id"));
    let reqData = await req.json();
    let result = await prisma.subscribers.update({
      where: { id: id },
      data: reqData,
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.error({
      status: "Error",
      message: "An error occurred while processing the request.",
    });
  }
};
// Delete
export const DELETE = async (req, res) => {
  try {
    let { searchParams } = new URL(req?.url);
    let id = parseInt(searchParams.get("id"));
    let result = await prisma.subscribers.delete({
      where: { id: id },
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json({
      status: "Error",
      message: "An error occurred while processing the request.",
    });
  }
};
