// *1. 수동으로 쿼리를 만들고 스키마 파일을 입력할 수 있는  graphql, GraphQLSchema를 불러옴
import { graphql, GraphQLSchema } from "graphql";

// *2.파라미터의 사용 여부를 나타내는 GraphQl 타입인 Maybe를 불러옴
import { Maybe } from "graphql/jsutils/Maybe";

//  *3. Options 인터페이스를 정의하고 나중에 testGraphQLQuery 함수에서 쿼리를 실행할 때 파라미터의 타입으로 사용됨
interface Options {
  schema: GraphQLSchema; // 사용할 GraphQL 스키마
  source: string; // 실행할 GraphQL 쿼리 문자열
  variableValues?: Maybe<{ [key: string]: any }>; // 쿼리 변수 (옵션)
}

// `testGraphQLQuery` 함수는 주어진 옵션을 사용하여 GraphQL 쿼리를 실행합니다.
// 결과는 Promise로 반환됩니다.
export const testGraphQLQuery = async ({
  schema,
  source,
  variableValues,
}: Options) => {
  return graphql({
    schema, // 사용할 스키마
    source, // 실행할 쿼리 문자열
    variableValues, // 쿼리에 전달할 변수 (있는 경우)
  });
};


//*4. getuser,test.ls 파일을 만들고 테스트를 작성


