"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = require("multer");
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./Routes/routes"));
const cors_1 = __importDefault(require("cors"));
const fileupload = require('express-fileupload');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: [process.env.URL_1, process.env.URL_2],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(fileupload());
app.use(routes_1.default);
const errorhandler = (err, res, next) => {
    res.status(400);
    if (err instanceof multer_1.MulterError) {
        res.json({ error: err.code });
    }
    else {
        console.log(err);
        res.json({ msg: "Errou ao enivar arquivo" });
    }
};
app.use(errorhandler);
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on ${process.env.PORT}`);
});
