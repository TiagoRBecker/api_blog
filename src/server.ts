import express from "express";
import dotenv from "dotenv"
import routes from "./Routes/routes";
import cors from "cors"
const fileupload = require('express-fileupload'); 


const url_one = process.env.URL_1
const url_two = process.env.URL_2
const url_tree = process.env.URL_3

dotenv.config()

const app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});





app.use(express.json());
app.use(express.urlencoded({ extended: true} ));



app.use(routes)

app.use(fileupload())

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on ${process.env.PORT}`)
})