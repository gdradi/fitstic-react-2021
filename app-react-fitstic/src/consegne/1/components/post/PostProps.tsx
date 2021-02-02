import { Post } from "../../models/Post";

export interface PostProps{
    post: Post
}

export interface CreatePostProps{
    callback: Callback
}

interface Callback{
    (post: Post):void
}