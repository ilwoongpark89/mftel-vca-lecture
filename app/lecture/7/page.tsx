import { redirect } from "next/navigation";

// Week 7 은 새 인터랙티브 강의(/week7) + 학번 학습 추적으로 이전됨.
export default function Lecture7Redirect() {
  redirect("/week7");
}
