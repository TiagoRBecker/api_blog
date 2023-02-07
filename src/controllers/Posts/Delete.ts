import  {PostServices} from "../../services/Posts/postServices"
import { Request, Response } from "express";

export const DeleteAllPost = async (req:Request,res:Response)=>{
    const deletePosts = await PostServices.deleteAllPost()
     res.status(200).json({msg:"Posts apagados com sucesso"})
}
export const DeleteOnePost = async (req:Request, res:Response)=>{
    const { id } = req.params
    const deleteOnePost = await PostServices.deleteOnePost(id)
    res.status(200).json({msg:"Post apagado com sucesso"})
}