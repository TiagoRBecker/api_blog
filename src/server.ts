import express,{ErrorRequestHandler,Response,NextFunction} from "express";
import { MulterError } from "multer";
import dotenv from "dotenv"
import routes from "./Routes/routes";
import cors from "cors"
const fileupload = require('express-fileupload'); 




dotenv.config()

const app = express();

app.use(cors({
  credentials:true,
  origin: [process.env.URL_1 as string,process.env.URL_2 as string],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}))



app.use(express.json());
app.use(express.urlencoded({ extended: true} ));



app.use(fileupload())
app.use(routes)

const errorhandler =  (err:any,res:Response,next:NextFunction)=>{
        res.status(400)
        if( err instanceof MulterError){
          res.json({error:err.code})

        }
        else{
          console.log(err)
          res.json({msg:"Errou ao enivar arquivo"})
        }
}
app.use(errorhandler)
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on ${process.env.PORT}`)
})