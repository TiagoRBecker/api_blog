import { Request, Response } from "express";
import { CategoriesService } from "../../services/Categories/categoriesService"

export const CreateCategorie = async(req:Request, res:Response)=>{
    const { name, url } = req.body
    const create = await CategoriesService.createCategory(name, url)

    if(create){
        return res.status(200).json({create})
    }
    res.status(500).json({msg:" Erro ao criar categoria tente novamente mais tarde"})
}