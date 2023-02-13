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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Categories_1 = require("../controllers/Categories");
const index_1 = require("../controllers/Posts/index");
const Users_1 = require("../controllers/Users");
const index_2 = require("../middlewares/Post/index");
const ChekingErrors_1 = require("../middlewares/Users/ChekingErrors");
const ChekingErrors_2 = require("../middlewares/Users/ChekingErrors");
const multer_1 = require("../helpers/config/multer");
const cors_1 = __importDefault(require("cors"));
const routes = (0, express_1.Router)();
routes.get("/teste", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ ok: "true" });
    }
    catch (error) {
        res.status(500).json({ error: "offiline" });
    }
}));
// Posts Get Routes
routes.get("/posts", (0, cors_1.default)(), index_1.PostController.GetAllPost);
routes.get("/lastposts", index_1.PostController.GetLastPost);
routes.get("/likeposts", index_1.PostController.GetLikePost);
routes.get("/posts/:id", index_1.PostController.GetOnePost);
routes.get("/views", index_1.PostController.GetViews);
//Posts Create Routes
routes.post("/posts", multer_1.Upload, index_1.PostController.CreatePost);
//Posts Update Routes
routes.put("/posts/:id", index_1.PostController.UpdatePost);
routes.put("/posts/:id/views", index_1.PostController.UpdateView);
routes.put("/posts/:id/like", index_1.PostController.UpdateLike);
routes.put("/posts/:id/deslike", index_1.PostController.UpdateDeslike);
// Posts Put Routes
// Posts Delete Routes
routes.delete("/posts", index_2.ErrorCheking.InterceptErrors, index_1.PostController.DeleteAllPost);
routes.delete("/posts/:id", index_2.ErrorCheking.ChekingId, index_1.PostController.DeleteOnePost);
// User Get Routes
routes.get("/user/me", ChekingErrors_2.chekingToken, Users_1.UserController.GetUser);
//User Post Routes
routes.post("/user/signup", ChekingErrors_1.ChekingEmail, Users_1.UserController.UserCreate);
routes.post("/user/signin", ChekingErrors_1.ChekingUser, Users_1.UserController.Signin);
//User Put Routes
//Categories Get Routes
routes.get("/categories", Categories_1.CategorieController.GetCategories);
routes.get("/categories/:id", Categories_1.CategorieController.GetCategoriesId);
routes.post("/categories", Categories_1.CategorieController.CreateCategorie);
//Update Routes
//Files
routes.post('/user/profile', (0, cors_1.default)(), ChekingErrors_2.chekingToken, multer_1.Upload, Users_1.UserController.UpdateProfile);
exports.default = routes;
