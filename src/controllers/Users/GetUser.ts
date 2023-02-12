import { Request,Response } from "express";
import { UserService } from "../../services/Users/usersService";
declare global {
    namespace Express {
        interface Request{
            user: { 
                id:number,
                name:string,
                email:string,
                avatar:string
             }
        }
    }
}
export const GetUser = async (req:Request, res:Response)=>{
       
       const { id }= req.user
      
     const userDados = await UserService.findUserById(id)
     return res.status(200).json( {userDados})
     


}