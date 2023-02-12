import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export  const PostServices ={
    getAll: async () =>{
        return await prisma.post.findMany({
            
            orderBy:{
                id:"desc"
            },
            

        })
    },
    getLastPost:async () => {

    return await prisma.post.findMany({
           skip:0,
           take:4,
           orderBy:{
              id:"desc"
           },
           include:{
            categorie:true
           }
    })
        
    },
    getLikePost:async () => {

        return await prisma.post.findMany({
               skip:0,
               take:4,
               orderBy:{
                  id:"desc"
               },
               where:{
                like:{
                    gte:6
                }
               }
               
        })
            
    },
    getLike : async ()=>{
        return await prisma.post.findMany({
            select:{
                like:true
            }
        })
    },
    getViews: async () =>{
        return await prisma.post.findMany({
            select:{
                viewCount:true
            }
        })
    },

    getOnePost: async (id:number) =>{
        
        return await prisma.post.findMany({
            where:{
                id:Number(id)
            },
            
            orderBy:{
                id:"desc"
            },
            
            

        })
    },
    findOne: async ( id:string)=>{
        return await prisma.post.findUnique({
            where:{
                id:Number(id)
            }
            
           
        })
        
    },
   
    createPost: async (title:string, content:string, authorId:number,authorName:string,  categoriesId:number, url?:string)=>{
       
       return await prisma.post.create({ 
        data:{
            
            title:title,
            content:content,
            authorName:authorName,
            authorId:authorId,
            categoriesId:categoriesId,
            url:url




            },
        
        
        
         
       })

    },
    updatePost: async (id: string, title?:string, content?:string, url?:string )=>{
        return await  prisma.post.update({
            where:{
                id:Number(id)
            },
            data:{

                title:title,
                content:content,
                url:url,
                
                

               
            }
         })
    },
    updatePostViewCount: async (id: string )=>{
        return await  prisma.post.update({
            where:{id:Number(id)},
            data:{
                
                viewCount:{
                    increment:1
                }
               
            }
         })
    },
    updateLike: async (id: string )=>{
        return await  prisma.post.update({
            where:{id:Number(id)},
            data:{
                
                like:{
                    increment:1
                }
               
            }
         })
    },
    updateDeslike: async (id: string )=>{
        return await  prisma.post.update({
            where:{id:Number(id)},
            data:{
                
                deslike:{
                    increment:1
                }
               
            }
         })
    },
    deleteAllPost: async ()=>{
        return await prisma.post.deleteMany({})
    },
    deleteOnePost: async (id:string)=>{
        return await prisma.post.delete({
            where:{id:Number(id)}
        })
    }


}