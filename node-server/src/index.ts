import express from "express"; // Express 모듈 불러오기
import { createServer } from "http"; // HTTP 서버 생성을 위한 모듈 불러오기

const app = express(); // Express 앱 인스턴스 생성

const server = createServer(app); // HTTP 서버 생성하고 Express 앱 연결

server.listen({ port: 8000 }, () => { // 8000 포트에서 서버를 시작하고 콘솔에 메시지 로깅
  console.log("Our server is running great!");
});
