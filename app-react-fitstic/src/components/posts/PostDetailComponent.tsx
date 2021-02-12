import React from 'react';
import { useParams } from 'react-router-dom';

import { EditPostCallback } from '../../models/CallbackInterfaces';
import { Post } from '../../models/Post';
import { DeletePostCallback, SinglePostComponent } from './SinglePostComponent';


interface RouteParams {
    readonly id: string;
}

interface PostDetailComponentProps {
    postList: Post[];
    editCallback: EditPostCallback;
    deleteCallback: DeletePostCallback;
}

export const PostDetailComponent: React.FunctionComponent<PostDetailComponentProps> = (props) => {

    /**
     * Params è una variabile di tipo "oggetto" chiave valore:
     * 
     * - le chiavi sono i nomi delle variabili che noi abbiamo definito nella rotta (in questo caso "id", perchè l'unica variabile della nostra rotta è ":id")
     * - i valori sono i rispettivi valori scritti dall'utente nell'URL
     */
    let params = useParams<RouteParams>();
    console.log(params);

    let postId = Number(params.id);
    if (isNaN(postId)) {
        console.error("INPUT SBAGLIATO");
    } else {
        console.log(postId);
    }

    let postDaVisualizzare = props.postList.find(item => item.id === postId);

    return (<>
        {isNaN(postId) 
            ? <div>L'id inserito in input non è un numero: {params.id}</div>
            : postDaVisualizzare == null ? <div>Il post con id {postId} non esiste</div>
            : <SinglePostComponent  editCallback={props.editCallback} deleteCallback={props.deleteCallback} post={postDaVisualizzare} />
        }
        </>
    )
};