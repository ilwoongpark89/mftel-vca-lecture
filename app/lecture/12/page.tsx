import { redirect } from "next/navigation";

// Week 12 은 새 인터랙티브 강의(/week12) + 학번 학습 추적으로 이전됨.
export default function Lecture12Redirect() {
  redirect("/week12");
}
