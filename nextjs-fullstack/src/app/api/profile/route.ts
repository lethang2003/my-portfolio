import { connectDB } from "@/lib/mongodb";
import { Profile } from "@/models/Profile";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const profile = await Profile.findOne();
  return NextResponse.json(profile);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();

  // Nếu đã có profile → cập nhật, nếu chưa → tạo mới
  const updated = await Profile.findOneAndUpdate({}, data, {
    upsert: true, // nếu không tìm thấy thì tạo mới
    new: true,    // trả về bản ghi sau khi cập nhật
  });

  return NextResponse.json(updated);
}

