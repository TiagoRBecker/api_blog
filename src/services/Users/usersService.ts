import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export const UserService = {
    findUserById: async (id:number)=>{
        return await prisma.user.findUnique({
            where:{
              id:Number(id)
            },
            select:{
                id:true,
                name:true,
                email:true,
                avatar:true
                

            }
           
            
            
            
        })
    },
    findUser: async (email?:string,password?:string)=>{
        return await prisma.user.findUnique({
            where:{
                email:email
            },
            select:{
                id:true,
                name:true,
                email:true,
                password:true,
                avatar:true
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
                avatar:true,
                
            }
        })
    },
    updateProfile: async (id:number,name?:string,email?:string,avatar?:string,)=>{
        return await prisma.user.update({
            where:{
                id:id
            },
            data:{
                name:name,
                email:email,
                avatar:avatar,
                

            }
        })

    }
}