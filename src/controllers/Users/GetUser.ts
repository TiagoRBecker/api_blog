import { Request,Response } from "express";
import { UserService } from "../../services/Users/usersService";
declare global {
    namespace Express {
        interface Request{
            user: { 
                id:number,
                name:string,
                email:string
             }
        }
    }
}
export const GetUser = async (req:Request, res:Response)=>{
       
       const { id,name,email }= req.user
      
     const userDados = await UserService.getUserData(Number(id))
     return res.status(200).json({ user:{id,name,email},userDados})
     


}