import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export const UserService = {
    findUserById: async (id:string)=>{
        return await prisma.user.findUnique({
            where:{
              id:Number(id)
            },
            select:{
                id:true,
                name:true,
                email:true,
                posts:true

            }
            
            
        })
    },
    findUser: async (email?:string,password?:string)=>{
        return await prisma.user.findUnique({
            where:{
                email:email
            }
           
            
            
            
        })
    },
    createUser: async (name:string,email:string,password:string)=>{
       return await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
       })
         
    },
    getUserData: async (id:number) =>{
        return await prisma.user.findMany({
            where:{
                id:Number(id)
            },
            select:{
                id:true,
                name:true,
                email:true,
                posts:true
            }
        })
    }
}