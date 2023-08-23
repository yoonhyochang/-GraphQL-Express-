//* 2.2. Express를 사용한 HTTP 서버 생성 및 8000 포트에서의 실행

import express from "express"; // Express 모듈 불러오기
import { createServer } from "http"; // HTTP 서버 생성을 위한 모듈 불러오기

const app = express(); // Express 앱 인스턴스 생성

const server = createServer(app); // HTTP 서버 생성하고 Express 앱 연결

server.listen({ port: 8000 }, () => { // 8000 포트에서 서버를 시작하고 콘솔에 메시지 로깅
  console.log("Our server is running great!");
});

//* 2.3. package.json 안에 start 스크립트 만든다
//* 2.3.1 "scripts": {
//*       "test": "echo \"Error: no test specified\" && exit 1",   // 테스트 스크립트가 지정되지 않았을 때 오류 메시지 출력
//*       "start": "ts-node-dev --respawn src/index.ts"   // TypeScript로 작성된 src/index.ts 파일을 ts-node-dev를 사용하여 실행하고, 파일 변경시 재시작
//*        },


//* 2.4. 터미널 창에 npm start입력으로 서버 실행
