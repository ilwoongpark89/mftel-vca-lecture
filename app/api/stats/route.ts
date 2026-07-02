import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";

// 학급 응답 분포 (점검 퀴즈, 신원 0 공개 집계) — 삭제된 가짜 agg 의 정직한 대체.
// GET /api/stats?week=1&chapter=1-1&question=Q1. → { ok, total, dist: [{opt,n}] }
export async function GET(req: NextRequest) {
  const p = req.nextUrl.searchParams;
  const week = Number(p.get("week"));
  const chapter = (p.get("chapter") || "").slice(0, 32);
  const question = (p.get("question") || "").slice(0, 64);
  if (!Number.isInteger(week) || week < 1 || week > 16 || !chapter || !question) {
    return NextResponse.json({ ok: false, error: "bad_params" }, { status: 400 });
  }
  const { data, error } = await supabase().rpc("vca_class_stats", {
    p_week: week,
    p_chapter: chapter,
    p_question: question,
  });
  if (error) return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  const dist = (data ?? []) as { opt: string; n: number }[];
  const total = dist.reduce((a, d) => a + Number(d.n), 0);
  return NextResponse.json(
    { ok: true, total, dist },
    { headers: { "cache-control": "no-store" } },
  );
}
