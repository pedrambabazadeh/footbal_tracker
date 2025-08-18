import { NextResponse } from "next/server";
import {results} from "./resultes";

export async function GET()
 {
  return NextResponse.json(results);
}