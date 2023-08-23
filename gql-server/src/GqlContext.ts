import { Request, Response } from "express"; // Express 라이브러리의 Request와 Response 타입을 가져옵니다.
import { PubSub } from "graphql-subscriptions"; // GraphQL 구독을 위한 PubSub을 가져옵니다.

// GraphQL 컨텍스트를 위한 인터페이스를 정의합니다.
export interface GqlContext {
  req: Request; // Express의 요청 객체
  res: Response; // Express의 응답 객체
  pubsub: PubSub; // GraphQL 구독을 관리하는 PubSub 인스턴스
}
