import React, { useEffect, useState } from "react";
import { StatisticsComponent } from "./posts/StatisticsComponent";
import { PostsListComponent } from "./posts/PostListComponent";
import { Post } from "../models/Post";
import { CreatePostCallback, EditPostCallback } from "../models/CallbackInterfaces";
import { DeletePostCallback } from "./posts/SinglePostComponent";
import { HashRouter } from "react-router-dom";
import { Spinner } from "./Spinner";
import { ErrorHandler } from "./ErrorHandler";

import axios from "axios";

export const LiftingStateComponent: React.FunctionComponent = () => {

    /**
     * Stato della lista che contiene i post
     */
    let [listOfPost, setListOfPost] = useState<Post[]>([]);
    let [isLoading, setIsLoading] = useState<boolean>(false);
    let [error, setError] = useState<any>(null);



    const fetchPost = () => {
        /**
         * Scrivo che cosa voglio fare:
         * in questo caso, una chiamata GET all'indirizzo 
         * https://my.api.mockaroo.com/post.json
         * passando come header:
         * "X-API-Key": "419a4ac0"
         * 
         */
        setIsLoading(true);
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
                setError(null);
            }
        ).catch(
            /**
             * Callback che sarà chiamata in caso di errore durante l'operazione
             * @param error 
             */
            (error) => {
                console.error(error);
                setError(error);
                /**
                 * Valutate se il comportamento che volete ottenere in caso di errore è:
                 * - mantengo visualizzati i post precedentemente caricato
                 * - oppure svuoto la lista di post precedentemente caricati
                 */
                //setListOfPost(null);
            }
        ).finally(
            /**
             * Questa callback viene chiamata in ogni caso alla fine
             */
            () => {
                setIsLoading(false);
                console.log("finally");
            }
        )



        // /**
        //  * Piu chiamate in parallelo
        //  */
        // const chiamata1 = axios.get("https://my.api.mockaroo.com/post.json", {
        //     headers: {
        //         "X-API-Key": "419a4ac0"
        //     }
        // });
        // const chiamata2 = axios.get("https://my.api.mockaroo.com/post.json", {
        //     headers: {
        //         "X-API-Key": "419a4ac0"
        //     }
        // });
        // Promise.all([
        //     chiamata1,
        //     chiamata2
        // ]).then(results => {
        //     const rispostaDellaPrimaChiamata = results[0];
        //     const rispostaDellaSecondaChiamata = results[1];
        // }).catch(error => {
        //     console.error(error);
        // }).finally(() => {

        // });

    }



    /**
     * Il prelievo dei dati dal server
     * è opportuno che sia effettuato all'interno
     * dell'hook di montaggio del componente:
     * 
     * questo perchè in questo modo è garantito
     * che eseguiamo solamente una volta il caricamento dei dati
     */
    useEffect(() => {
        // onCreate() di Android
        // componentDidMount() 
        fetchPost();
    }, []);



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

            <div>
                <button onClick={() => {
                    fetchPost();
                }}>Ricarica post</button>
            </div>
            {error != null && <ErrorHandler error={error} />}

            {isLoading === true && <Spinner />}
            {isLoading === false && <>
                <PostsListComponent editCallback={callbackEditPost} postList={listOfPost} createCallback={callbackCreatePost} deleteCallback={callbackDeletePost} />
                <StatisticsComponent lista={listOfPost} />
            </>}

        </HashRouter>
    </>
}