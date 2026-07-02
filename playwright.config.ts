import { defineConfig } from "@playwright/test";
import { readFileSync } from "fs";

// .env.local 수동 로드 (의존성 없이) — 테스트가 Supabase/토큰 env 사용
try {
  for (const line of readFileSync(".env.local", "utf-8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
  }
} catch {}

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  expect: { timeout: 8_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: process.env.HTL_E2E_BASE || "http://localhost:3939",
    channel: "chrome",
    headless: true,
    viewport: { width: 1440, height: 900 },
    actionTimeout: 8_000,
  },
});
