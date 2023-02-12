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
exports.GetCategoriesId = exports.GetCategories = void 0;
const categoriesService_1 = require("../../services/Categories/categoriesService");
const GetCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get = yield categoriesService_1.CategoriesService.findCategories();
    if (get) {
        return res.status(200).json({ get });
    }
});
exports.GetCategories = GetCategories;
const GetCategoriesId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const get = yield categoriesService_1.CategoriesService.findCategoriesById(id);
    if (get.length > 0) {
        return res.status(200).json({ get });
    }
    else {
        res.status(404).json({ msg: "Não encontramos categorias no sistema" });
    }
});
exports.GetCategoriesId = GetCategoriesId;
