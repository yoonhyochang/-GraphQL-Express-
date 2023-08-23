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
exports.log = void 0;
const log = (resolver, parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    if (!parent) {
        console.log("Start logging");
    }
    const result = yield resolver(parent, args, context, info);
    console.log("Finished call to resolver");
    return result;
});
exports.log = log;
//# sourceMappingURL=Logger.js.map