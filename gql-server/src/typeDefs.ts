
// Apollo Server와 Express를 사용하기 위한 gql 함수를 가져옵니다.
import { gql } from "apollo-server-express";
// GraphQL 스키마를 정의합니다. 
const typeDefs = gql`
# User 타입을 정의합니다. 각 User는 ID, 사용자 이름, 이메일을 가집니다.
type User {
  id: ID! # ID 필드는 필수이며, null이 될 수 없습니다.
  username: String! # 사용자 이름 필드도 필수입니다.
  email: String # 이메일 필드는 선택 사항입니다.
}

# Todo 타입을 정의합니다. 각 Todo는 ID, 제목, 설명을 가집니다.
type Todo {
  id: ID! # ID 필드는 필수이며, null이 될 수 없습니다.
  title: String! # 제목 필드도 필수입니다.
  description: String # 설명 필드는 선택 사항입니다.
}

# 쿼리를 정의합니다. 사용자를 가져오거나 모든 할 일 목록을 가져올 수 있습니다.
type Query {
  getUser(id: ID): User # ID를 사용하여 특정 사용자를 가져옵니다.
  getTodos: [Todo!] # 모든 할 일 목록을 가져옵니다. null이 될 수 없는 Todo 배열입니다.
}

# 뮤테이션을 정의합니다. 할 일을 추가하는 기능을 제공합니다.
type Mutation {
  addTodo(title: String!, description: String): Todo # 제목과 설명을 사용하여 새 할 일을 추가합니다.
}

# 구독을 정의합니다. 새로운 할 일이 생성될 때 알림을 받습니다.
type Subscription {
  newTodo: Todo! # 새 할 일이 생성될 때마다 전달됩니다. null이 될 수 없습니다.
}
`;

export default typeDefs;
