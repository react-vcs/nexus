import { NextResponse } from "next/server";
import { decodeToken } from "./utility/tokenEncodeDecode";

export const middleware = async (req, res) => {
  try {
    let token = req.cookies.get("token");
    let payload = await decodeToken(token?.value);
    let reqHeader = new Headers(req?.headers);
    reqHeader.set("id", payload?.id);
    reqHeader.set("email", payload?.email);
    console.log(reqHeader);
    return NextResponse.next({ request: { headers: reqHeader } });
  } catch (e) {
    let reqHeader = new Headers(req?.headers);
    reqHeader.set("id", undefined);
    reqHeader.set("email", undefined);
    console.log(reqHeader);
    return NextResponse.next({ request: { headers: reqHeader } });
  }
};
