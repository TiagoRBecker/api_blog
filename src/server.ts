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
app.use(cors({
  credentials:false,
  origin:[url_one as string,url_two as string,url_tree as string] 
}))





app.use(express.json());
app.use(express.urlencoded({ extended: true} ));



app.use(routes)

app.use(fileupload())

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on ${process.env.PORT}`)
})