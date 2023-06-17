import { NextResponse } from "next/server";

export function GET() {
	return NextResponse.json("© Copyright 42 team")
}