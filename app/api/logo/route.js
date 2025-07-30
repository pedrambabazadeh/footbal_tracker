import { NextResponse } from "next/server";
import { logo } from "./logo";

export async function GET()
{
    return NextResponse.json(logo);
}