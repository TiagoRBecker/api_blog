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
exports.UpdateProfile = void 0;
const cloudinary_1 = require("cloudinary");
const usersService_1 = require("../../services/Users/usersService");
const UpdateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!req.files || !req.file) {
        return res.status(404).json({ msg: "Necessário selecionar imagem do perfil" });
    }
    const result = yield cloudinary_1.v2.uploader.upload((_a = req.file) === null || _a === void 0 ? void 0 : _a.path, {
        public_id: `${Math.floor(Math.random() * 99999)}_profile`,
        width: 500,
        height: 500,
        crop: 'fill',
    });
    const { id } = req.user;
    const { name, email } = req.body;
    const avatar = result.url;
    try {
        if (result.url) {
            const userUpdate = yield usersService_1.UserService.updateProfile(id, name, email, avatar);
            res.json({ msg: " Perfil atualizado com sucesso", userUpdate });
        }
    }
    catch (error) {
        res.status(404).json({ msg: "Não foi possível atualizar o seu perfil" });
        console.log(error);
    }
});
exports.UpdateProfile = UpdateProfile;
