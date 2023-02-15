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
exports.UpdateDeslike = exports.UpdateLike = exports.UpdateView = exports.UpdatePost = void 0;
const postServices_1 = require("../../services/Posts/postServices");
const cloudinary_1 = require("cloudinary");
const UpdatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const { title, content, categoriesId } = req.body;
    const findOnePost = yield postServices_1.PostServices.findOne(id);
    if (!findOnePost) {
        res.status(404).json({ msg: "Não foi possível encontrar o post" });
    }
    try {
        const result = yield cloudinary_1.v2.uploader.upload((_a = req.file) === null || _a === void 0 ? void 0 : _a.path, {
            public_id: `${Math.floor(Math.random() * 99999)}_post`,
            crop: 'fill',
        });
        const url = result.url;
        const update = yield postServices_1.PostServices.updatePost(id, title, content, categoriesId, url);
        res.status(201).json({ update });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro no sistema tente novamente mais tarde" });
    }
});
exports.UpdatePost = UpdatePost;
const UpdateView = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findOne = yield postServices_1.PostServices.findOne(id);
    if (findOne) {
        try {
            const update = yield postServices_1.PostServices.updatePostViewCount(id);
            if (update) {
                res.status(201).json({ update });
            }
        }
        catch (error) {
            res.status(500).json({ msh: "Não foi possivel , tente novamente mais tarde" });
        }
    }
    else {
        res.status(404).json({ msg: "Post não encontrado no sistema" });
    }
});
exports.UpdateView = UpdateView;
const UpdateLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findOne = yield postServices_1.PostServices.findOne(id);
    if (findOne) {
        try {
            const update = yield postServices_1.PostServices.updateLike(id);
            if (update) {
                res.status(201).json({ update });
            }
        }
        catch (error) {
            res.status(500).json({ msh: "Não foi possivel , tente novamente mais tarde" });
        }
    }
    else {
        res.status(404).json({ msg: "Post não ecncontrado no sistema" });
    }
});
exports.UpdateLike = UpdateLike;
const UpdateDeslike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findOne = yield postServices_1.PostServices.findOne(id);
    if (findOne) {
        try {
            const update = yield postServices_1.PostServices.updateDeslike(id);
            if (update) {
                res.status(201).json({ update });
            }
        }
        catch (error) {
            res.status(500).json({ msh: "Não foi possivel , tente novamente mais tarde" });
        }
    }
    else {
        res.status(404).json({ msg: "Post não ecncontrado no sistema" });
    }
});
exports.UpdateDeslike = UpdateDeslike;
