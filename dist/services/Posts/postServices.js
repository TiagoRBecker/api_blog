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
exports.PostServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.PostServices = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.findMany({
            orderBy: {
                id: "desc"
            },
        });
    }),
    getLastPost: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.findMany({
            skip: 0,
            take: 4,
            orderBy: {
                id: "desc"
            },
            include: {
                categorie: true
            }
        });
    }),
    getLikePost: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.findMany({
            skip: 0,
            take: 4,
            orderBy: {
                id: "desc"
            },
            where: {
                like: {
                    gte: 6
                }
            }
        });
    }),
    getLike: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.findMany({
            select: {
                like: true
            }
        });
    }),
    getViews: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.findMany({
            select: {
                viewCount: true
            }
        });
    }),
    getOnePost: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.findMany({
            where: {
                id: Number(id)
            },
            orderBy: {
                id: "desc"
            },
        });
    }),
    findOne: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.findUnique({
            where: {
                id: Number(id)
            }
        });
    }),
    createPost: (title, content, authorId, categoriesId, url) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.create({
            data: {
                title: title,
                content: content,
                authorId: authorId,
                categoriesId: categoriesId,
                url: url
            },
        });
    }),
    updatePost: (id, title, content, url) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.update({
            where: {
                id: Number(id)
            },
            data: {
                title: title,
                content: content,
                url: url,
            }
        });
    }),
    updatePostViewCount: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.update({
            where: { id: Number(id) },
            data: {
                viewCount: {
                    increment: 1
                }
            }
        });
    }),
    updateLike: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.update({
            where: { id: Number(id) },
            data: {
                like: {
                    increment: 1
                }
            }
        });
    }),
    updateDeslike: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.update({
            where: { id: Number(id) },
            data: {
                deslike: {
                    increment: 1
                }
            }
        });
    }),
    deleteAllPost: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.deleteMany({});
    }),
    deleteOnePost: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.delete({
            where: { id: Number(id) }
        });
    })
};
