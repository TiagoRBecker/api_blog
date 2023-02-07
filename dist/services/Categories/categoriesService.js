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
exports.CategoriesService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.CategoriesService = {
    findCategories: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.categories.findMany({
            include: {
                posts: true,
            },
        });
    }),
    findCategoriesById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.categories.findMany({
            where: {
                id: Number(id),
            },
            include: {
                posts: true,
            },
        });
    }),
    createCategory: (name, url) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.categories.create({
            data: {
                name: name,
                url: url,
            },
        });
    }),
    updateCategory: (id, name) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.categories.update({
            where: {
                id: Number(id),
            },
            data: {
                name: name,
            },
        });
    }),
};
