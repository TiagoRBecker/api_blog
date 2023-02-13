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
app.use((0, cors_1.default)({
    credentials: false,
    origin: [url_one, url_two, url_tree]
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.use(fileupload());
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on ${process.env.PORT}`);
});
