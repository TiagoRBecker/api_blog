import  {PostServices} from "../../services/Posts/postServices"
import { Request, Response } from "express";
// Get All post from the system
export const GetAllPost = async (req:Request,res:Response)=>{
    
   const  post = await PostServices.getAll()
      if(post){
        return res.status(200).json({post})
      }
      res.status(404).json({msg:"Não encontrados posts no sistema"})
  
}

//Get Posts whit like  6+
export const GetLikePost = async (req:Request,res:Response)=>{
    
  const  post = await PostServices.getLikePost()
     if(post){
       return res.status(200).json({post})
     }
     res.status(404).json({msg:"Não encontrados posts no sistema"})
 
}

export const GetViews =async (req:Request,res:Response) => {
  const post = await PostServices.getViews()
   return res.status(200).json({post})
}

//Get One post from the system
export const GetOnePost = async (req:Request,res:Response)=>{
    const { id } = req.params
   
    const getOne = await PostServices.findOne(id)
    if(getOne){
       res.status(200).json({getOne})
    }
    else{
        res.status(404).json({msg:"Não encontrado o post no sistema"})
    }

  
     
}

//Get last five posts from the system 
export const GetLastPost = async (req:Request,res:Response)=>{
    
    
     const lastPost = await PostServices.getLastPost()
      if(lastPost){
        return res.status(200).json({lastPost})
      }
    res.status(404).json({msg:"Não encontrados  posts no sistema"})
}
