import { NextResponse } from "next/server";
import { signIn } from '../auth'

export async function GET(request: Request) {
    await signIn("google")
    return NextResponse.json({ message: "Successful login" })
}