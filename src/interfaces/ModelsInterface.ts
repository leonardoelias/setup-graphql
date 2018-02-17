import {UserModel} from "../models/UserModels";
import {PostModel} from "../models/PostModel";
import {CommentModel} from "../models/CommentModel";

export interface ModelsInterface {
    Post : PostModel;
    User : UserModel;
    Comment : CommentModel
}