import { useState } from "react"
import { Post } from "../../models/Post";
import { CreatePost } from "./CreatePost";
import { PostView } from "./PostView";

export let PostList: React.FunctionComponent = () =>{
    let [postsList, setPostslist] = useState<Post[]>([]);
    console.log(postsList);
    return <div>
        <CreatePost callback={(post)=>{
            let newPostList = [post, ...postsList];
            setPostslist(newPostList);
            console.log(postsList);
            }} />

       {postsList.map((item, index) => <PostView key={index} post={item} />)}
  </div>
}