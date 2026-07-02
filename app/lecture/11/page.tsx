import { redirect } from "next/navigation";

// Week 11 은 새 인터랙티브 강의(/week11) + 학번 학습 추적으로 이전됨.
export default function Lecture11Redirect() {
  redirect("/week11");
}
