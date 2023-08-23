"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
const uuid_1 = require("uuid");
exports.todos = [
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
//# sourceMappingURL=db.js.map