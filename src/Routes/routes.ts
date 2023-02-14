import { Router, Request, Response } from "express";
import { CategorieController } from "../controllers/Categories";
import { PostController } from "../controllers/Posts/index";
import { UserController } from "../controllers/Users";
import { ErrorCheking } from "../middlewares/Post/index";
import { ChekingEmail, ChekingUser } from "../middlewares/Users/ChekingErrors";
import { chekingToken } from "../middlewares/Users/ChekingErrors";
import { Upload } from "../helpers/config/multer";






const routes = Router();
routes.get("/teste", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ok:"true"})
    
  } catch (error) {
     res.status(500).json({error:"offiline"})
  }
   
});
// Posts Get Routes
routes.get("/posts", PostController.GetAllPost);
routes.get("/lastposts", PostController.GetLastPost);
routes.get("/likeposts", PostController.GetLikePost);
routes.get("/posts/:id", PostController.GetOnePost);
routes.get("/views", PostController.GetViews);
//Posts Create Routes
routes.post("/posts",Upload, PostController.CreatePost);
//Posts Update Routes
routes.put("/posts/:id", PostController.UpdatePost);

routes.put("/posts/:id/views", PostController.UpdateView);

routes.put("/posts/:id/like", PostController.UpdateLike);

routes.put("/posts/:id/deslike", PostController.UpdateDeslike);
// Posts Put Routes
// Posts Delete Routes
routes.delete(
  "/posts",
  ErrorCheking.InterceptErrors,
  PostController.DeleteAllPost
);
routes.delete(
  "/posts/:id",
  ErrorCheking.ChekingId,
  PostController.DeleteOnePost
);

// User Get Routes
routes.get("/user/me", chekingToken, UserController.GetUser);

//User Post Routes
routes.post("/user/signup", ChekingEmail, UserController.UserCreate);
routes.post("/user/signin", ChekingUser, UserController.Signin);

//User Put Routes

//Categories Get Routes
routes.get("/categories", CategorieController.GetCategories);
routes.get("/categories/:id", CategorieController.GetCategoriesId);
routes.post("/categories", CategorieController.CreateCategorie);

//Update Routes


//Files
routes.post('/user/profile',chekingToken,Upload, UserController.UpdateProfile )

export default routes;
