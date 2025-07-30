import { NextResponse } from "next/server";
import { navBarItems } from "./navBarItems";

export async function GET()
{
    return NextResponse.json(navBarItems);
}