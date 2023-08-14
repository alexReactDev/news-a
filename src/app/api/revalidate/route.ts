import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
	const path = req.nextUrl.searchParams.get("path");

	if(!path) return NextResponse.json("BAD REQUEST", { status: 400 });

	revalidatePath(path);

	return NextResponse.json("OK");
}