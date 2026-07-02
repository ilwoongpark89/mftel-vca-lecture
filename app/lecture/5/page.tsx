import { redirect } from "next/navigation";

// Week 5 은 새 인터랙티브 강의(/week5) + 학번 학습 추적으로 이전됨.
export default function Lecture5Redirect() {
  redirect("/week5");
}
