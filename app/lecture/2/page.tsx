import { redirect } from "next/navigation";

// Week 2 는 새 인터랙티브 강의(mockup, /week2) + 학번 학습 추적으로 이전됨.
export default function Lecture2Redirect() {
  redirect("/week2");
}
