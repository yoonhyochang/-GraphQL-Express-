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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const schema_1 = require("@graphql-tools/schema");
const http_1 = __importDefault(require("http"));
const graphql_subscriptions_1 = require("graphql-subscriptions");
const ws_1 = require("ws");
const ws_2 = require("graphql-ws/lib/use/ws");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const graphql_middleware_1 = require("graphql-middleware");
const Logger_1 = require("./Logger");
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const pubsub = new graphql_subscriptions_1.PubSub();
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
});
const schemaWithMiddleware = (0, graphql_middleware_1.applyMiddleware)(schema, Logger_1.log);
const wsServer = new ws_1.WebSocketServer({
    server: httpServer,
    path: "/graphql-ws",
});
const serverCleanup = (0, ws_2.useServer)({
    schema: schemaWithMiddleware,
    context: () => {
        return { pubsub };
    },
}, wsServer);
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema: schemaWithMiddleware,
    context: ({ req, res }) => {
        return { req, res, pubsub };
    },
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
        (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
        {
            serverWillStart() {
                return __awaiter(this, void 0, void 0, function* () {
                    return {
                        drainServer() {
                            return __awaiter(this, void 0, void 0, function* () {
                                yield serverCleanup.dispose();
                            });
                        },
                    };
                });
            },
        },
    ],
});
apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, cors: false });
    httpServer.listen({ port: 8000 }, () => {
        console.log("GraphQL server ready.");
    });
});
//# sourceMappingURL=server.js.map