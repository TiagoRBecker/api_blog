import { Request,Response } from "express";
import  {v2 as cloudinary} from "cloudinary"
import { UserService } from "../../services/Users/usersService";

 
 
export const UpdateProfile = async (req:Request,res:Response)=>{
   const { id } = req.user
    const {name, email} = req.body
    try {
      if(req.file?.path){
         const result = await cloudinary.uploader.upload(req.file?.path  as string, {
            public_id: `${Math.floor(Math.random()*99999)}_profile`,
            width: 500,
            height: 500,
            crop: 'fill',
          });
         const avatar = result.url
         const userUpdate = await UserService.updateProfile(id,name,email,avatar)
         res.json({msg:" Perfil atualizado com sucesso"})
      }
      else{
         const avatar = "https://res.cloudinary.com/tiagobecker/image/upload/v1676303352/perfil_ba7vp5.webp" 
         const userUpdate = await UserService.updateProfile(id,name,email,avatar)
         res.json({msg:" Perfil atualizado com sucesso"})
      }
      
    } catch (error) {
       console.log(error)
       res.status(404).json({msg:"Não foi possivel autalizar o perfil"})
    }

}
