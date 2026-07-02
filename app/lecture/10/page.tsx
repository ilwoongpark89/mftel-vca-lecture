import { redirect } from "next/navigation";

// Week 10 은 새 인터랙티브 강의(/week10) + 학번 학습 추적으로 이전됨.
export default function Lecture10Redirect() {
  redirect("/week10");
}
