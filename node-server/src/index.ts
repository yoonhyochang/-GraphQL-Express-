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

//* 3. 프로젝트에 Graph와 의존성 추가
//* 3.1. gql-server폴더 만든 다음 터미널 창에 npm init
//* 3.2. npm i express graphql @graphql-tools/schema @graphql-tools/mock
     // express, graphql, @graphql-tools/schema, @graphql-tools/mock 패키지를 설치
//* 3.3. npm install ts-node-dev @types/uuid --save-dev nodemon ts-node-dev @types/uuid -D
     // 개발 의존성으로 ts-node-dev, @types/uuid 패키지와 nodemon을 설치
     // ts-node-dev는 TypeScript 코드를 실행하기 위한 도구이고, @types/uuid는 uuid 라이브러리의 TypeScript 타입 정의를 제공
//* 3.4. npm i @types/express typescript @types/jest @faker-js/faker jest
     // express의 TypeScript 타입 정의, TypeScript 컴파일러, jest의 TypeScript 타입 정의,
     // @faker-js/faker 라이브러리, 테스팅 프레임워크인 jest를 설치
//* 3.5. nodemon ts-jest ts-node-dev @types/uuid -D
     // 개발 의존성으로 nodemon(자동 리로드를 위한 도구), ts-jest(TypeScript 지원을 위한 jest 플러그인),
     // ts-node-dev(TypeScript 실행을 위한 도구), uuid 라이브러리의 TypeScript 타입 정의를 설치
//* 3.6. tsc -init 을 통한 타입 스크립트 초기화 
//* 3.6.1 "scripts": {
//*        "test": "echo \"Error: no test specified\" && exit 1",
//*        "start": "ts-node-dev --respawn src/server.ts"
//*       },

//* 3.7. npm i graphql-subscriptions graphql-ws ws 
     // graphql-subscriptions: GraphQL의 실시간 구독을 지원하는 패키지 설치
     // graphql-ws: GraphQL over WebSocket 프로토콜을 위한 패키지 설치
     // ws: WebSocket을 위한 패키지 설치

//* 3.8. npm i -D@types/ws
     // -D 옵션을 사용하여 개발 의존성으로 ws 패키지의 TypeScript 타입 정의를 설치

//* 3.9. npm start를 통한 실행확인