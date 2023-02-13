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
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','*');
  next(); 
})
app.use(cors())





app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
app.use(fileupload())


app.use(routes)



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on ${process.env.PORT}`)
})