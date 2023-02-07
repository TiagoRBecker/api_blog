import { Request,Response } from "express";
import JWT from "jsonwebtoken"


import { UserService } from "../../../services/Users/usersService";

export const Signin = async (req:Request, res:Response)=>{
    const secret = process.env.SECRET
    const { email , password} = req.body
    const authLogin = await  UserService.findUser(email, password)
   
     const name = authLogin?.name
     const id= authLogin?.id
    
    try {
        if(authLogin){
            const token = JWT.sign({
                id:authLogin.id,
                name:authLogin.name
            },secret as string ,{ expiresIn:"2h"})
            
            res.status(200).json({ user:{id,name}, token, msg:"Usuario logado com sucesso" })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Não foi possível tenta novamente mais tarde"})
    }
}

