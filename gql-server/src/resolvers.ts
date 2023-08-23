import { IResolvers } from "@graphql-tools/utils";
import { v4 } from "uuid";
import { GqlContext } from "./GqlContext";
import { todos } from "./db";

// 사용자 인터페이스 정의
interface User {
  id: string;
  username: string;
  email?: string;
}

// 할 일 인터페이스 정의
interface Todo {
  id: string;
  title: string;
  description?: string;
}

const NEW_TODO = "NEW TODO";

// GraphQL 리졸버 정의
const resolvers: IResolvers = {
  Query: {
    // 사용자 가져오기 쿼리
    getUser: async (
      obj: any,
      args: {
        id: string;
      },
      ctx: GqlContext,
      info: any
    ): Promise<User> => {
      return {
        id: v4(),
        username: "dave",
      };
    },
    // 모든 할 일 가져오기 쿼리
    getTodos: async (
      parent: any,
      args: null,
      ctx: GqlContext,
      info: any
    ): Promise<Array<Todo>> => {
      console.log("running getTodos");
      return [
        {
          id: v4(),
          title: "First todo",
          description: "First todo description",
        },
        {
          id: v4(),
          title: "Second todo",
          description: "Second todo description",
        },
        {
          id: v4(),
          title: "Third todo",
        },
      ];
    },
  },
  Mutation: {
    // 새 할 일 추가 뮤테이션
    addTodo: async (
      parent: any,
      args: {
        title: string;
        description: string;
      },
      { pubsub }: GqlContext,
      info: any
    ): Promise<Todo> => {
      const newTodo = {
        id: v4(),
        title: args.title,
        description: args.description,
      };
      todos.push(newTodo);
      pubsub.publish(NEW_TODO, { newTodo });
      return todos[todos.length - 1];
    },
  },
  Subscription: {
    // 새 할 일 구독
    newTodo: {
      subscribe: (parent: any, args: null, { pubsub }: GqlContext) =>
        pubsub.asyncIterator([NEW_TODO]),
    },
  },
};

export default resolvers;
