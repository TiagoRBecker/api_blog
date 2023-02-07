import  {PostServices} from "../../services/Posts/postServices"
import { NextFunction, Request, Response } from "express";


export const  InterceptErrors = async (req:Request,res:Response , next:NextFunction)=>{
  
     const posts = await PostServices.getAll()
     if(posts.length > 0){
        return next()
     }
     else{
        res.status(404).json({msg:"Não foram encontrados posts no sistema"})
     }
     

}

export const ChekingId =async (req:Request , res:Response,next:NextFunction) => {
    const { id } = req.params
    const getId = await PostServices.findOne(id)
    
    if(getId){
        return next()
    }
    else{
        res.status(404).json({msg:"Post não encontrado no sistema"})
    }
   
    
}