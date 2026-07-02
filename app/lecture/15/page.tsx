import { redirect } from "next/navigation";

// Week 15 은 새 인터랙티브 강의(/week15) + 학번 학습 추적으로 이전됨.
export default function Lecture15Redirect() {
  redirect("/week15");
}
