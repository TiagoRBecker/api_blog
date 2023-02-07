import  {PostServices} from "../../services/Posts/postServices"
import { Request, Response } from "express";

export const UpdatePost = async (req:Request,res:Response)=>{
    const { id } = req.params
    const { title, content, url} = req.body
    

    const  findOnePost = await PostServices.findOne(id)
    if(!findOnePost){
      res.status(404).json({msg:"Não foi possível encontrar o post"})
    }
    try {
        const update = await PostServices.updatePost(id,title,content,url)
         res.status(201).json({update})
       } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Erro no sistema tente novamente mais tarde"})
        
       }
    
    
}

export const UpdateView = async (req:Request,res:Response)=>{
    const { id } = req.params
     const findOne = await PostServices.findOne(id)
     if(findOne){
       try {
        const update = await PostServices.updatePostViewCount(id)
        if(update){
            res.status(201).json({update})
        }
       } catch (error) {
          res.status(500).json({msh:"Não foi possivel , tente novamente mais tarde"})
       }
     }
     else{
        res.status(404).json({msg:"Post não encontrado no sistema"})
     }
    
}

export const UpdateLike =async (req:Request,res:Response) => {
    const { id }  = req.params
    const findOne = await PostServices.findOne(id)
    if(findOne){
        try {
            const update = await PostServices.updateLike(id)
            if(update){
                res.status(201).json({update})
            }
        } catch (error) {
            res.status(500).json({msh:"Não foi possivel , tente novamente mais tarde"})
        }
    }
    else{
        res.status(404).json({msg:"Post não ecncontrado no sistema"})
    }
    
    
}
export const UpdateDeslike = async (req:Request,res:Response) => {
    const { id }  = req.params
    const findOne = await PostServices.findOne(id)
    if(findOne){
        try {
            const update = await PostServices.updateDeslike(id)
            if(update){
                res.status(201).json({update})
            }
        } catch (error) {
            res.status(500).json({msh:"Não foi possivel , tente novamente mais tarde"})
        }
    }
    else{
        res.status(404).json({msg:"Post não ecncontrado no sistema"})
    }
    
    
}