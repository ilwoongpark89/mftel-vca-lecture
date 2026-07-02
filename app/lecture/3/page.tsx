import { redirect } from "next/navigation";

// Week 3 은 새 인터랙티브 강의(/week3) + 학번 학습 추적으로 이전됨.
export default function Lecture3Redirect() {
  redirect("/week3");
}
