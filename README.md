# SubTalk 프로젝트 설정
**프로젝트를 위한 package.json 파일 생성**  
npm init  
**TypeScript 패키지 설치**  
npm i typescript  
**TypeScript 설정 파일(tsconfig.json) 초기화**  
tsc -init  

# node, Express 의존성 추가
**Express 웹 프레임워크 설치**  
npm i express  
**타입 정의, 테스트 라이브러리, 개발용 모니터링 도구 설치**  
npm i @types/express jest @types/jest ts-jest nodemon  
**ts-node-dev를 전역으로 설치 (TypeScript 파일 실행 도구)**  
npm install -g ts-node-dev  
**ts-node-dev로 특정 명령 실행 (테스트와 모킹을 위한 가짜 데이터 생성기)**  
ts-node-dev @faker-js/faker -d  


npm init
npm i express graphql @graphql-tools/schema @graphql-tools/mock
npm install graphql-middleware apollo-server-express uuid
npm i @types/express typescript @types/jest @faker-js/faker jest
npm install ts-node-dev @types/uuid --save-dev
nodemon ts-node-dev @types/uuid -D

npm install -D ts-node-dev @types/uuid nodemon

npm i graphql-subscri ptions graphql-ws ws
npm i -D@types/ws
