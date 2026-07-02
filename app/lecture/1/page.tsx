import { redirect } from "next/navigation";

// Week 1 은 새 인터랙티브 강의(mockup, /week1) + 학번 학습 추적으로 이전됨.
export default function Lecture1Redirect() {
  redirect("/week1");
}
