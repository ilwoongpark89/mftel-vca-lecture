import { redirect } from "next/navigation";

// Week 9 은 새 인터랙티브 강의(/week9) + 학번 학습 추적으로 이전됨.
export default function Lecture9Redirect() {
  redirect("/week9");
}
