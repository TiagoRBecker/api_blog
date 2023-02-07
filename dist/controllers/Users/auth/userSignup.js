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
exports.UserCreate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const usersService_1 = require("../../../services/Users/usersService");
const UserCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const salt = process.env.SALT;
    const secret = process.env.SECRET;
    const hashPassword = yield bcrypt_1.default.hash(password, Number(salt));
    const newUser = yield usersService_1.UserService.createUser(name, email, hashPassword);
    try {
        if (newUser) {
            const token = jsonwebtoken_1.default.sign({
                id: newUser.id,
                name: newUser.name
            }, secret, { expiresIn: "1h" });
            return res.status(200).json({ msg: "Usuário criado com sucesso", token });
        }
    }
    catch (error) {
        res.status(500).json({ msg: "Erro ao criar usuário tente novamente mais tarde" });
    }
});
exports.UserCreate = UserCreate;
