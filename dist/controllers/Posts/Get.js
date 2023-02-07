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
exports.GetLastPost = exports.GetOnePost = exports.GetViews = exports.GetLikePost = exports.GetAllPost = void 0;
const postServices_1 = require("../../services/Posts/postServices");
// Get All post from the system
const GetAllPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield postServices_1.PostServices.getAll();
    if (post.length >= 1) {
        return res.status(200).json({ post });
    }
    res.status(404).json({ msg: "Não encontrados posts no sistema" });
});
exports.GetAllPost = GetAllPost;
//Get Posts whit like  6+
const GetLikePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield postServices_1.PostServices.getLikePost();
    if (post.length >= 1) {
        return res.status(200).json({ post });
    }
    res.status(404).json({ msg: "Não encontrados posts no sistema" });
});
exports.GetLikePost = GetLikePost;
const GetViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield postServices_1.PostServices.getViews();
    return res.status(200).json({ post });
});
exports.GetViews = GetViews;
//Get One post from the system
const GetOnePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const getOne = yield postServices_1.PostServices.findOne(id);
    if (getOne) {
        res.status(200).json({ getOne });
    }
    else {
        res.status(404).json({ msg: "Não encontrado o post no sistema" });
    }
});
exports.GetOnePost = GetOnePost;
//Get last five posts from the system 
const GetLastPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lastPost = yield postServices_1.PostServices.getLastPost();
    if (lastPost.length >= 1) {
        return res.status(200).json({ lastPost });
    }
    res.status(404).json({ msg: "Não encontrados  posts no sistema" });
});
exports.GetLastPost = GetLastPost;
