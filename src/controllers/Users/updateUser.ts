import { Request,Response } from "express";
import  {v2 as cloudinary} from "cloudinary"
import { UserService } from "../../services/Users/usersService";

 
 
export const UpdateProfile = async (req:Request,res:Response)=>{
   
    
    const result = await cloudinary.uploader.upload(req.file?.path  as string, {
      public_id: `${Math.floor(Math.random()*99999)}_profile`,
      width: 500,
      height: 500,
      crop: 'fill',
    });
   
   const { id } = req.user
   const {name, email} = req.body
   const  avatar = result.url
   try{
      if(result.url){
       const userUpdate = await UserService.updateProfile(id,name,email,avatar)
       res.json({msg:" Perfil atualizado com sucesso", userUpdate})
      }
   }
   catch(error ){
      res.status(404).json({msg:"Não foi possível atualizar o seu perfil"})
     console.log(error)
   }     
     
}