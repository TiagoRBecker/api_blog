import { Request,Response } from "express";
import JWT from "jsonwebtoken"


import { UserService } from "../../../services/Users/usersService";

export const Signin = async (req:Request, res:Response)=>{
    const secret = process.env.SECRET
    const { email , password} = req.body
   
    const authLogin = await  UserService.findUser(email, password)
    const user ={id:authLogin?.id, name:authLogin?.name, avatar:authLogin?.avatar, email:authLogin?.email}
    
    
    try {
        if(authLogin){
            const token = JWT.sign({
                id:authLogin.id,
                name:authLogin.name,
                avatar:authLogin.avatar
            },secret as string ,{ expiresIn:"2h"})
            
            res.status(200).json({ user, token, msg:"Usuario logado com sucesso" })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Não foi possível tenta novamente mais tarde"})
    }
}

