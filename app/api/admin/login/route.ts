import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { timingSafeEqual } from "crypto";
import { ADMIN_COOKIE, STUDENT_COOKIE, PROF_SID } from "@/lib/supabase";
import { ipFromRequest, isRateLimited, noteAttempt, clearRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_FAILS = 10;

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

export async function POST(req: NextRequest) {
  // 로그인 비밀번호(교수가 입력) — 강한 DB 토큰과 분리
  const pwExpected = process.env.HTL_ADMIN_PASSWORD;
  const tokenForCookie = process.env.HTL_ADMIN_TOKEN;
  const ip = "admin:" + ipFromRequest(req);

  if (isRateLimited(ip, MAX_FAILS)) {
    return NextResponse.json({ ok: false, error: "locked" }, { status: 429 });
  }

  let pw = "";
  try {
    pw = (await req.json())?.password ?? "";
  } catch {
    /* ignore */
  }

  if (!pwExpected || !tokenForCookie || typeof pw !== "string" || !safeEqual(pw, pwExpected)) {
    noteAttempt(ip, WINDOW_MS);
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  clearRateLimit(ip);
  const jar = await cookies();
  const opts = {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 8, // 8h
  };
  jar.set(ADMIN_COOKIE, tokenForCookie, { ...opts, httpOnly: true });
  // 교수 세션: htl_sid=__prof__ (non-httpOnly → 강의 게이트 통과 + htl-track 가 추적 skip).
  // 교수가 /week1·/week2 강의 컨텐츠를 미리보기/열람 가능, 단 학습 기록은 남기지 않음.
  jar.set(STUDENT_COOKIE, PROF_SID, { ...opts, httpOnly: false });
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE);
  jar.delete(STUDENT_COOKIE);
  return NextResponse.json({ ok: true });
}
