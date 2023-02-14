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
    var _a, _b;
    const { id } = req.user;
    const { name, email } = req.body;
    try {
        if ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) {
            const result = yield cloudinary_1.v2.uploader.upload((_b = req.file) === null || _b === void 0 ? void 0 : _b.path, {
                public_id: `${Math.floor(Math.random() * 99999)}_profile`,
                width: 500,
                height: 500,
                crop: 'fill',
            });
            const avatar = result.url;
            const userUpdate = yield usersService_1.UserService.updateProfile(id, name, email, avatar);
            res.json({ msg: " Perfil atualizado com sucesso" });
        }
        else {
            const avatar = "https://res.cloudinary.com/tiagobecker/image/upload/v1676303352/perfil_ba7vp5.webp";
            const userUpdate = yield usersService_1.UserService.updateProfile(id, name, email, avatar);
            res.json({ msg: " Perfil atualizado com sucesso" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ msg: "Não foi possivel autalizar o perfil" });
    }
});
exports.UpdateProfile = UpdateProfile;
