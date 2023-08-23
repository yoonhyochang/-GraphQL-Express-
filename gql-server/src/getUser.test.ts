//* 5.5. GraphQL 스키마 정의와 테스트를 위한 모듈 임포트


import typeDefs from "./typeDefs"; // GraphQL 타입 정의 가져오기
import resolvers from "./resolvers"; // Resolver 함수 가져오기
import { makeExecutableSchema } from "@graphql-tools/schema"; // 실행 가능한 스키마 생성하기 위한 함수
import { addMocksToSchema } from "@graphql-tools/mock"; // 스키마에 모의 데이터 추가하기 위한 함수
import { faker } from "@faker-js/faker"; // 가짜 데이터 생성을 위한 라이브러리
import { testGraphQLQuery } from "./testGraphQLQuery"; // 테스트 쿼리 실행 함수


//* 5.6.describe를 사용해 테스트를 설정한 디음 원하는 필드를 사용해 getUser용 쿼리 만듬
describe("Testing getting a user", () => {
  const GetUser = `
        query GetUser($id: ID!) {
            getUser(id: $id) {
                id
                username
                email
            }
        }
    `; 
  //* 5.7. 테스트에서 typeDefs와 resolvers를 합쳐주는 함수를 만든 후 모킹한 user 객체의 가짜 데이터 필드를 설징
  it("gets the desired user", async () => {
    const schema = makeExecutableSchema({ typeDefs, resolvers }); // 스키마 생성
    const userId = faker.random.alphaNumeric(20); // 임의의 사용자 ID 생성
    const username = faker.internet.userName(); // 임의의 사용자 이름 생성
    const email = faker.internet.email(); // 임의의 이메일 생성
    const mocks = {
      User: () => ({
        id: userId,
        username,
        email,
      }),
    };
    //* 5.8. addMocksToschema를 사용해 모킹한 user 객체를 스키마에 추가해 관련된 쿼리가 만들어지면 반환되도록 함
    console.log("id", userId);
    console.log("username", username);
    console.log("email", email);

    const schemaWithMocks = addMocksToSchema({ schema, mocks }); 

    //* 5.9. testGraphQuery 함수를 통해 모킹된 데이터를 받음
    const queryResponse = await testGraphQLQuery({
      schema: schemaWithMocks,
      source: GetUser,
      variableValues: { id: faker.random.alphaNumeric(20) },
    }); // 쿼리 실행
    const result = queryResponse.data ? queryResponse.data.getUser : null;
    console.log("result", result);
    expect(result).toEqual({
      id: userId,
      username,
      email,
    }); // 결과 검증
  });
});


// *5.10. 테스트를 실행하기 전에 package.json 파일에 jest용 설정을 추가함
// "jest": {
//     "transform": {
//       ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
//     },
//     "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
//     "moduleFileExtensions": [
//       "ts",
//       "tsx",
//       "js"
//     ]
//   }


// *5.11. gql-server 경로에서 터미널을 통해 jest 명령을 실행 후 결과 확인
//! 5.11-1  'jest' 명령이 시스템 경로에 없거나 설치되지 않았음
//? 5.11-1 npm install -g jest 또는 npm install --save-dev jest 설치
//? 5.11-2 package.json 파일 내의 scripts 섹션에서 테스트 명령을 설정("scripts": {"test": "jest"})