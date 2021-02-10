import React, { useState } from "react";
import {StatisticsComponent} from "./posts/StatisticsComponent";
import {PostsListComponent} from "./posts/PostListComponent";
import { Post } from "../models/Post";
import { CreatePostCallback, EditPostCallback } from "../models/CallbackInterfaces";
import { DeletePostCallback } from "./posts/SinglePostComponent";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";

export const LiftingStateComponent: React.FunctionComponent = () => {

    /**
     * Stato della lista che contiene i post
     */
    let [listOfPost, setListOfPost] = useState<Post[]>([]);

    /**
     * Funzione di CallBack che chiede post in ingresso per aggiungerlo alla lista
     * e aggiornare la vista
     */
    let callbackCreatePost: CreatePostCallback = (newPost) => {
        setListOfPost(listOfPost.concat(newPost));
    }

    /**
     * Funzione di CallBack che chiede id in ingresso per eliminarlo alla lista
     * e aggiornare la vista
     */
    let callbackDeletePost: DeletePostCallback = (id) => {
        setListOfPost(listOfPost.filter(item => item.id !== id));
    }


    /**
     * Callback di modifica
     */
    let callbackEditPost: EditPostCallback = (editedPost) => {
        setListOfPost(listOfPost.map(item => item.id === editedPost.id ? editedPost : item));
        console.log(listOfPost);
    }



    return <>
        <HashRouter>
            <PostsListComponent editCallback={callbackEditPost} postList={listOfPost} createCallback={callbackCreatePost} deleteCallback={callbackDeletePost}/>
            <StatisticsComponent lista={listOfPost}/>
        </HashRouter>
    </>
}