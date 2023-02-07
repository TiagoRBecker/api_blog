import { Request,Response } from "express";
import JWT from "jsonwebtoken"
import bcrypt from "bcrypt";
import { UserService } from "../../../services/Users/usersService";

export const  UserCreate = async (req:Request,res:Response)=>{
    const { name,email, password} = req.body
    const salt = process.env.SALT
    const secret = process.env.SECRET
    const hashPassword = await  bcrypt.hash(password, Number(salt) ) 
   
    const newUser = await UserService.createUser(name,email,hashPassword)

    try {
        if(newUser){

            const token = JWT.sign({
                id:newUser.id,
                name:newUser.name
            },
            secret as string,{expiresIn:"1h"})
            return res.status(200).json({msg:"Usuário criado com sucesso", token})
        }
        
    } catch (error) {
        res.status(500).json({msg:"Erro ao criar usuário tente novamente mais tarde"})
    }


}