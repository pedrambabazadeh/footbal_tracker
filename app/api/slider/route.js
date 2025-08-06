import { NextResponse } from "next/server";
import {photos} from "./photos"

export async function GET()
{
    return NextResponse.json(photos);
}