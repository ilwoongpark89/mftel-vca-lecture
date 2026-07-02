import { redirect } from "next/navigation";

// Week 6 은 새 인터랙티브 강의(/week6) + 학번 학습 추적으로 이전됨.
export default function Lecture6Redirect() {
  redirect("/week6");
}
