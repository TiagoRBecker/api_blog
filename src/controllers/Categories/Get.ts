import { Request, Response } from "express";
import { CategoriesService } from "../../services/Categories/categoriesService"


export const  GetCategories = async (req:Request,res:Response)=>{
    const get =  await  CategoriesService.findCategories()
     if(get){
        return res.status(200).json({get})
     }

     
}
export const  GetCategoriesId = async (req:Request,res:Response)=>{
    const { id} = req.params
    const get =  await  CategoriesService.findCategoriesById(id)
     if(get.length > 0){
        return res.status(200).json({get})
     }else{
        res.status(404).json({msg:"Não encontramos categorias no sistema"})
     }

     
}