# SubTalk 프로젝트 설정<br> 
**프로젝트를 위한 package.json 파일 생성** <br> 
npm init<br> 
**TypeScript 패키지 설치** <br> 
npm i typescript<br> 
 **TypeScript 설정 파일(tsconfig.json) 초기화** <br> 
tsc -init<br> 

# SubTalk 의존성 추가<br> 
**Express 웹 프레임워크 설치** <br> 
npm i express<br> 
**타입 정의, 테스트 라이브러리, 개발용 모니터링 도구 설치** <br> 
npm i @types/express jest @types/jest ts-jest nodemon<br> 
**ts-node-dev를 전역으로 설치 (TypeScript 파일 실행 도구)** <br> 
npm install -g ts-node-dev<br> 
**ts-node-dev로 특정 명령 실행 (테스트와 모킹을 위한 가짜 데이터 생성기)** <br> 
ts-node-dev @faker-js/faker -d<br> 
