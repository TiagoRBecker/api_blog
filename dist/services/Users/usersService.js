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
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.UserService = {
    findUserById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.user.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                name: true,
                email: true,
                posts: true
            }
        });
    }),
    findUser: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.user.findUnique({
            where: {
                email: email
            }
        });
    }),
    createUser: (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        });
    }),
    getUserData: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.user.findMany({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                name: true,
                email: true,
                posts: true
            }
        });
    })
};
