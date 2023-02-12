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
exports.Signin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usersService_1 = require("../../../services/Users/usersService");
const Signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = process.env.SECRET;
    const { email, password } = req.body;
    const authLogin = yield usersService_1.UserService.findUser(email, password);
    const user = { id: authLogin === null || authLogin === void 0 ? void 0 : authLogin.id, name: authLogin === null || authLogin === void 0 ? void 0 : authLogin.name, avatar: authLogin === null || authLogin === void 0 ? void 0 : authLogin.avatar, email: authLogin === null || authLogin === void 0 ? void 0 : authLogin.email };
    try {
        if (authLogin) {
            const token = jsonwebtoken_1.default.sign({
                id: authLogin.id,
                name: authLogin.name,
                avatar: authLogin.avatar
            }, secret, { expiresIn: "2h" });
            res.status(200).json({ user, token, msg: "Usuario logado com sucesso" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Não foi possível tenta novamente mais tarde" });
    }
});
exports.Signin = Signin;
