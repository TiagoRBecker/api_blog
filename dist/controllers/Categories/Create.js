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
exports.CreateCategorie = void 0;
const categoriesService_1 = require("../../services/Categories/categoriesService");
const CreateCategorie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, url } = req.body;
    const create = yield categoriesService_1.CategoriesService.createCategory(name, url);
    if (create) {
        return res.status(200).json({ create });
    }
    res.status(500).json({ msg: " Erro ao criar categoria tente novamente mais tarde" });
});
exports.CreateCategorie = CreateCategorie;
