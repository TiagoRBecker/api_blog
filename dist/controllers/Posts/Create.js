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
exports.CreatePost = void 0;
const postServices_1 = require("../../services/Posts/postServices");
const cloudinary_1 = require("cloudinary");
const CreatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { title, content, authorId, authorName, categoriesId, } = req.body;
    const result = yield cloudinary_1.v2.uploader.upload((_a = req.file) === null || _a === void 0 ? void 0 : _a.path, {
        public_id: `${Math.floor(Math.random() * 99999)}_post`,
        crop: 'fill',
    });
    const url = result.url;
    const create = yield postServices_1.PostServices.createPost(title, content, Number(authorId), authorName, Number(categoriesId), url);
    if (create) {
        return res.status(201).json({ create });
    }
    res.status(500).json({ msg: "Não foi possivel criar o post , tente novamente mais tarde" });
});
exports.CreatePost = CreatePost;
