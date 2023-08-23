//* 4.2. log 함수는 GraphQL 리졸버 호출을 가로채 해당 resolver 함수가 동작하기전에 로깅함
export const log = async (
    resolver: any, // 실행할 실제 리졸버 함수
    parent: any,   // 부모 객체, 특정 필드의 부모 타입 인스턴스
    args: any,     // 클라이언트로부터 전달받은 인수
    context: any,  // 공유 컨텍스트, 예: 로그인한 사용자 정보
    info: any      // 실행할 GraphQL 쿼리에 대한 메타정보
  ) => {
    if (!parent) {
      console.log("Start logging"); // 로깅 시작 메시지, 최상위 리졸버일 경우에만 출력됩니다.
    }
  
    // 실제 리졸버 함수를 호출하고 결과를 얻습니다.
    const result = await resolver(parent, args, context, info);
  
    console.log("Finished call to resolver"); // 리졸버 호출 완료 메시지를 출력합니다.
  
    return result; // 리졸버의 결과를 반환합니다.
  };
  

  //* 4.3. server.ts 파일을 수정해 이 로거를 사용하도록 함