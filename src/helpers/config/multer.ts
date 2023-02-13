import multer from "multer";

export const Upload = multer({ 
    
    dest: 'uploads/',
    fileFilter:(req,file,cb)=>{
         const allowed: string[] = ['image/jpg','image/jpeg','image/png']
         cb(null,allowed.includes( ( file.mimetype )))
         
         
    } 
}).single('file')