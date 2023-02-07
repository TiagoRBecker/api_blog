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
exports.DeleteOnePost = exports.DeleteAllPost = void 0;
const postServices_1 = require("../../services/Posts/postServices");
const DeleteAllPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletePosts = yield postServices_1.PostServices.deleteAllPost();
    res.status(200).json({ msg: "Posts apagados com sucesso" });
});
exports.DeleteAllPost = DeleteAllPost;
const DeleteOnePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteOnePost = yield postServices_1.PostServices.deleteOnePost(id);
    res.status(200).json({ msg: "Post apagado com sucesso" });
});
exports.DeleteOnePost = DeleteOnePost;
