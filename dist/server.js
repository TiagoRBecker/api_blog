"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./Routes/routes"));
const cors_1 = __importDefault(require("cors"));
const fileupload = require('express-fileupload');
const url_one = process.env.URL_1;
const url_two = process.env.URL_2;
const url_tree = process.env.URL_3;
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(fileupload());
app.use(routes_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on ${process.env.PORT}`);
});
