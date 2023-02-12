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
exports.chekingToken = exports.ChekingUser = exports.ChekingEmail = void 0;
const usersService_1 = require("../../services/Users/usersService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ChekingEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const chekingEmail = yield usersService_1.UserService.findUser(email);
    if ((chekingEmail === null || chekingEmail === void 0 ? void 0 : chekingEmail.email) === email) {
        return res.status(500).json({ msg: "E-mail já cadastrado no sistema" });
    }
    next();
});
exports.ChekingEmail = ChekingEmail;
const ChekingUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(404).json({ msg: "Preencha os campos vazios" });
    }
    const chekUser = yield usersService_1.UserService.findUser(email, password);
    if (!(chekUser === null || chekUser === void 0 ? void 0 : chekUser.email)) {
        return res.status(404).json({ msg: "E-mail não cadastrado no sistema" });
    }
    const chekingPassword = yield bcrypt_1.default.compare(password, chekUser === null || chekUser === void 0 ? void 0 : chekUser.password);
    if (!chekingPassword) {
        return res.status(401).json({ msg: "Senha ou E-mail inválidos" });
    }
    next();
});
exports.ChekingUser = ChekingUser;
const chekingToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const secret = process.env.SECRET;
    if (!authorization) {
        return res.status(401).json({ msg: "Nao autorizado" });
    }
    const [authtype, token] = authorization.split(" ");
    if (authtype === "Bearer") {
        const decode = jsonwebtoken_1.default.verify(token, secret, (err, payload) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                res.status(401).json({ msg: "Nao autorizado" });
            }
            const { id } = payload;
            console.log(id);
            const getUser = yield usersService_1.UserService.findUserById(id);
            if (getUser) {
                req.user = getUser;
                console.log(req.user.id);
                next();
            }
        }));
    }
});
exports.chekingToken = chekingToken;
