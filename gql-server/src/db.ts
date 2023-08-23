import { v4 } from "uuid"; // UUID 생성 라이브러리를 가져옵니다.

// 초기 할 일 목록을 정의합니다.
export const todos = [
  {
    id: v4(), // 고유 식별자 생성
    title: "First todo", // 첫 번째 할 일의 제목
    description: "First todo description", // 첫 번째 할 일의 설명
  },
  {
    id: v4(), // 고유 식별자 생성
    title: "Second todo", // 두 번째 할 일의 제목
    description: "Second todo description", // 두 번째 할 일의 설명
  },
  {
    id: v4(), // 고유 식별자 생성
    title: "Third todo", // 세 번째 할 일의 제목
  },
];
