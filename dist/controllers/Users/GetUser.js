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
exports.GetUser = void 0;
const usersService_1 = require("../../services/Users/usersService");
const GetUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const userDados = yield usersService_1.UserService.findUserById(id);
    return res.status(200).json({ userDados });
});
exports.GetUser = GetUser;
