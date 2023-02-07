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
exports.ChekingId = exports.InterceptErrors = void 0;
const postServices_1 = require("../../services/Posts/postServices");
const InterceptErrors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield postServices_1.PostServices.getAll();
    if (posts.length > 0) {
        return next();
    }
    else {
        res.status(404).json({ msg: "Não foram encontrados posts no sistema" });
    }
});
exports.InterceptErrors = InterceptErrors;
const ChekingId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const getId = yield postServices_1.PostServices.findOne(id);
    if (getId) {
        return next();
    }
    else {
        res.status(404).json({ msg: "Post não encontrado no sistema" });
    }
});
exports.ChekingId = ChekingId;
