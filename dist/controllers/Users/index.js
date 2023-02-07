"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userSignup_1 = require("./auth/userSignup");
const userSignin_1 = require("./auth/userSignin");
const GetUser_1 = require("./GetUser");
exports.UserController = {
    UserCreate: userSignup_1.UserCreate, Signin: userSignin_1.Signin, GetUser: GetUser_1.GetUser
};
