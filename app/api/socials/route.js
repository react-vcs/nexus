import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
let prisma = new PrismaClient();
// Create
export const POST = async (req, res) => {
  try {
    let reqData = await req.json();
    let result = await prisma.socials.create({
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
// Read
export const GET = async (req, res) => {
  try {
    let result = await prisma.socials.findMany();
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
    let result = await prisma.socials.update({
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
    let result = await prisma.socials.delete({
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
