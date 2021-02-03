import React from "react";
import { Post } from "../../models/Post";
import { CreatePostCallback, CreatePostComponent } from "./CreatePostComponent";
import { DeletePostCallback, SinglePostComponent } from "./SinglePostComponent";

export interface PostsListComponentProps {
    postList: Post[];
    createCallback: CreatePostCallback;
    deleteCallback: DeletePostCallback;
}

/**
 * PostListComponent priceve in infresso una lista di post e la passa al SinglePostComponent per generare la vista
 * riceve anche la callback di delete per eliminare un post
 */
export let PostsListComponent: React.FunctionComponent<PostsListComponentProps> = (props) => {

    return <div className="postsListComponent">
        <CreatePostComponent createCallback={props.createCallback}/>
        
        {props.postList.map((item, index) => <SinglePostComponent deleteCallback={props.deleteCallback} key={index} post={item}/>).reverse()}
        
    </div>
}