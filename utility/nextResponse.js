import { getReasonPhrase } from "http-status-codes";
import { NextResponse } from "next/server";

export const NextResponseModified = (status, data, headers) => {
  return NextResponse.json(
    {
      status: getReasonPhrase(status),
      data: data,
    },
    { status: status, headers: headers }
  );
};
