import { redirect } from "next/navigation";

// Week 14 은 새 인터랙티브 강의(/week14) + 학번 학습 추적으로 이전됨.
export default function Lecture14Redirect() {
  redirect("/week14");
}
