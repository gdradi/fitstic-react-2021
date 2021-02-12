import React, { useEffect, useState } from "react";
import {StatisticsComponent} from "./posts/StatisticsComponent";
import {PostsListComponent} from "./posts/PostListComponent";
import { Post } from "../models/Post";
import { CreatePostCallback, EditPostCallback } from "../models/CallbackInterfaces";
import { DeletePostCallback } from "./posts/SinglePostComponent";
import { HashRouter } from "react-router-dom";
import { Spinner } from "./Spinner";

import axios from "axios";

export const LiftingStateComponent: React.FunctionComponent = () => {

    useEffect(() => {

        /**
         * Scrivo che cosa voglio fare:
         * in questo caso, una chiamata GET all'indirizzo 
         * https://my.api.mockaroo.com/post.json
         * passando come header:
         * "X-API-Key": "419a4ac0"
         * 
         */
        axios.get("https://my.api.mockaroo.com/post.json", {
            headers: {
                "X-API-Key": "419a4ac0"
            }
        }).then(
        /**
         * Callback che saà chiamata in caso di successo dell'operazione
         * @param response 
         */
        (response) => {
            console.log(response.data);
            const listaDiPostOttenutaDaApi = response.data.map((data: any) => {
                let post: Post = {
                    author: data.author,
                    content: data.content,
                    date: data.date,
                    id: data.id,
                    isEdited: false,
                    title: data.title
                };
                return post;
            })
            // Costruire l'array di post a apartire da response.data
            setListOfPost(listaDiPostOttenutaDaApi);
        }
        ).catch(
        /**
         * Callback che sarà chiamata in caso di errore durante l'operazione
         * @param error 
         */
        (error) => {
            console.error(error);
        }
        ).finally(
        /**
         * Questa callback viene chiamata in ogni caso alla fine
         */
        () => {
            console.log("finally");
        }
        )

    }, []);


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