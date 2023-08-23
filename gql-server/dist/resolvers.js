"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const db_1 = require("./db");
const NEW_TODO = "NEW TODO";
const resolvers = {
    Query: {
        getUser: (obj, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            return {
                id: (0, uuid_1.v4)(),
                username: "dave",
            };
        }),
        getTodos: (parent, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("running getTodos");
            return [
                {
                    id: (0, uuid_1.v4)(),
                    title: "First todo",
                    description: "First todo description",
                },
                {
                    id: (0, uuid_1.v4)(),
                    title: "Second todo",
                    description: "Second todo description",
                },
                {
                    id: (0, uuid_1.v4)(),
                    title: "Third todo",
                },
            ];
        }),
    },
    Mutation: {
        addTodo: (parent, args, { pubsub }, info) => __awaiter(void 0, void 0, void 0, function* () {
            const newTodo = {
                id: (0, uuid_1.v4)(),
                title: args.title,
                description: args.description,
            };
            db_1.todos.push(newTodo);
            pubsub.publish(NEW_TODO, { newTodo });
            return db_1.todos[db_1.todos.length - 1];
        }),
    },
    Subscription: {
        newTodo: {
            subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator([NEW_TODO]),
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map