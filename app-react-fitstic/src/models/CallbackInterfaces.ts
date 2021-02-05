import { Post } from "./Post";

export interface BaseCallback {
    (post: Post): void;
}


export interface CreatePostCallback extends BaseCallback {

}

export interface EditPostCallback extends BaseCallback {
    
}