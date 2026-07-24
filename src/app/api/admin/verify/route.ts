import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { passcode } = await req.json();
    const correctPasscode = process.env.ADMIN_PASSCODE || "1234";

    if (passcode === correctPasscode) {
      return NextResponse.json({ authorized: true });
    }

    return NextResponse.json({ authorized: false }, { status: 401 });
  } catch (error) {
    console.error("Passcode verification error:", error);
    return NextResponse.json({ authorized: false }, { status: 500 });
  }
}
