import { redirect } from "next/navigation";

// Week 13 은 새 인터랙티브 강의(/week13) + 학번 학습 추적으로 이전됨.
export default function Lecture13Redirect() {
  redirect("/week13");
}
