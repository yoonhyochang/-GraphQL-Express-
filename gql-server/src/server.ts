import express from "express"; // Express 웹 서버 프레임워크를 가져옵니다.
import { ApolloServer } from "apollo-server-express"; // Apollo 서버를 Express와 함께 사용합니다.
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"; // HTTP 서버 제어 플러그인입니다.
import { makeExecutableSchema } from "@graphql-tools/schema"; // GraphQL 스키마 생성 도구입니다.
import http from "http"; // Node.js 내장 HTTP 모듈입니다.
import { PubSub } from "graphql-subscriptions"; // 구독(subscription) 처리를 위한 PubSub 라이브러리입니다.
import { WebSocketServer } from "ws"; // WebSocket 서버 라이브러리입니다.
import { useServer } from "graphql-ws/lib/use/ws"; // GraphQL WebSocket 서버를 위한 라이브러리입니다.
import typeDefs from "./typeDefs"; // GraphQL 타입 정의를 가져옵니다.
import resolvers from "./resolvers"; // GraphQL 리졸버를 가져옵니다.
import { applyMiddleware } from "graphql-middleware"; // GraphQL 미들웨어를 적용하는 라이브러리입니다.
import { log } from "./Logger"; // Logger 미들웨어를 가져옵니다.

const app = express(); // Express 앱 인스턴스를 생성합니다.
const httpServer = http.createServer(app); // HTTP 서버 인스턴스를 생성합니다.
const pubsub = new PubSub(); // PubSub 인스턴스를 생성합니다.

// GraphQL 스키마를 생성합니다.
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// 로깅 미들웨어와 함께 스키마를 생성합니다.
const schemaWithMiddleware = applyMiddleware(schema, log);

// WebSocket 서버를 생성하고 경로를 설정합니다.
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql-ws",
});

// WebSocket 서버 클린업 로직을 설정합니다.
const serverCleanup = useServer(
  {
    schema: schemaWithMiddleware,
    context: () => {
      return { pubsub };
    },
  },
  wsServer
);

// Apollo 서버 인스턴스를 설정하고 생성합니다.
const apolloServer = new ApolloServer({
    schema: schemaWithMiddleware,
    context: ({ req, res }: any) => {
      return { req, res, pubsub };
    },
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  // 서버 시작 후 미들웨어 적용과 리스닝을 설정합니다.
apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, cors: false });
    httpServer.listen({ port: 8000 }, () => {
      console.log("GraphQL server ready."); // 서버가 준비되었음을 알립니다.
    });
  });