import { Request, Response } from "express";
import  {PostServices} from "../../services/Posts/postServices"
import  {v2 as cloudinary} from "cloudinary"

export const CreatePost = async (req:Request,res:Response)=>{
    const {title, content,authorId,authorName, categoriesId, } = req.body
    const result = await cloudinary.uploader.upload(req.file?.path  as string, {
        public_id: `${Math.floor(Math.random()*99999)}_post`,
        crop: 'fill',
      });
      const url = result.url as string
    const create = await PostServices.createPost(title,content,Number(authorId),authorName,Number(categoriesId),url);
    if(create){
        return res.status(201).json({create})
    }
    res.status(500).json({msg:"Não foi possivel criar o post , tente novamente mais tarde"})

     
    
}