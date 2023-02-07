import { CreatePost } from "./Create";
import { GetAllPost, GetOnePost, GetLastPost, GetLikePost,GetViews} from "./Get";
import { UpdatePost, UpdateView, UpdateLike, UpdateDeslike } from "./Update";
import { DeleteAllPost, DeleteOnePost } from "./Delete";

export const PostController = {
  GetAllPost,
  GetOnePost,
  GetLastPost,
  GetLikePost,
  GetViews,
  CreatePost,
  UpdatePost,
  UpdateView,
  UpdateLike,
  UpdateDeslike,
  DeleteAllPost,
  DeleteOnePost
};
