"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const Create_1 = require("./Create");
const Get_1 = require("./Get");
const Update_1 = require("./Update");
const Delete_1 = require("./Delete");
exports.PostController = {
    GetAllPost: Get_1.GetAllPost,
    GetOnePost: Get_1.GetOnePost,
    GetLastPost: Get_1.GetLastPost,
    GetLikePost: Get_1.GetLikePost,
    GetViews: Get_1.GetViews,
    CreatePost: Create_1.CreatePost,
    UpdatePost: Update_1.UpdatePost,
    UpdateView: Update_1.UpdateView,
    UpdateLike: Update_1.UpdateLike,
    UpdateDeslike: Update_1.UpdateDeslike,
    DeleteAllPost: Delete_1.DeleteAllPost,
    DeleteOnePost: Delete_1.DeleteOnePost
};
