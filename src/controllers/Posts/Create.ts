import  {PostServices} from "../../services/Posts/postServices"
import { Request, Response } from "express";
export const CreatePost = async (req:Request,res:Response)=>{
    const {title, content, authorId,categoriesId,url } = req.body
    
    const create = await PostServices.createPost(title,content,authorId,categoriesId,url);
    if(create){
        return res.status(201).json({create})
    }
    res.status(500).json({msg:"Não foi possivel criar o post , tente novamente mais tarde"})

     
    
}