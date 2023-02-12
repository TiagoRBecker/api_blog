
import { NextFunction, Request, Response } from "express";
import { UserService } from "../../services/Users/usersService";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
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

export const ChekingEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const chekingEmail = await UserService.findUser(email);

  if (chekingEmail?.email === email) {
    return res.status(500).json({ msg: "E-mail já cadastrado no sistema" });
  }
  next();
};

export const ChekingUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.status(404).json({msg:"Preencha os campos vazios"})
  }
  const chekUser = await UserService.findUser(email, password);
  if (!chekUser?.email) {
    return res.status(404).json({ msg: "E-mail não cadastrado no sistema" });
  }

  const chekingPassword = await bcrypt.compare(
    password,
    chekUser?.password as string
  );

  if (!chekingPassword) {
    return res.status(401).json({ msg: "Senha ou E-mail inválidos" });
  }
  next();
};
export const chekingToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const secret = process.env.SECRET;
  if (!authorization) {
    return res.status(401).json({ msg: "Nao autorizado" });
  }

  const [authtype, token] = authorization.split(" ");
  if (authtype === "Bearer") {
    const decode = Jwt.verify(token, secret as string, async (err: any, payload: any) => {
      if (err) {
        res.status(401).json({ msg: "Nao autorizado" });
        
      }
       
      
         
       
        const { id } = payload
        console.log(id)
        const getUser = await UserService.findUserById(id)
        if(getUser){
         
         req.user =  getUser as any
         console.log(req.user.id)
         next()
         
        }
    });
  }
};
