import { useState } from "react";
import { EditPostCallback } from "../../models/CallbackInterfaces";
import { Post } from "../../models/Post";

export interface DeletePostCallback {
    (id: number): void;
}


/**
 * L'intefaccia PostProps chiede in ingresso un oggetto di tipo Post e l'interfaccia 
 * della callback di eliminazione post.
 * Esso, quando richiamato, si occupa a passare l'oggetto ottenuto Post direttamente
 * all'interfaccia Post, senza dover passare ogni singola caratteristaca interna, e di
 * poter richiamare la callback passatogli in ingresso per eseguirla. 
 */
interface PostProps {
    post: Post;
    deleteCallback: DeletePostCallback; 
    editCallback: EditPostCallback;
}

/**
 * Il componente "SinglePost" contiene la struttura html del singolo Post.
 * Riceve l'oggetto Post dall'array ciclato dal componente PostListComponent
 */
export const SinglePostComponent: React.FunctionComponent<PostProps> = (props) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(props.post.title);
    const [content, setContent] = useState<string>(props.post.content);


    return (


    <div className="post-body">

        {/* se sono in visualizzazione, faccio vedere questo */}
        <div className="post-author">{props.post.author}</div>
        <div>Id: {props.post.id}</div>
        <div className="post-delete-btn">
            {isEditing === true 
                ? <><button className="btn-edit" title="Edit Post" onClick={() => {
                        
                    // Creo un oggetto che rappresenta il mio post modificato
                    // Titolo, contenuto, data e isEdited vengono settati da noi
                    // Author e Id sono gli stessi dell'originale    
                    const editedPost: Post = {
                            title: title,
                            content: content,
                            date: new Date().toLocaleString(),
                            isEdited: true,
                            author: props.post.author,
                            id: props.post.id
                        };
                        props.editCallback(editedPost);
                        setIsEditing(false);
                        }}>Salva</button>
                    <button className="btn-edit" title="Edit Post" onClick={() => {
                        setIsEditing(false);
                        }}>Annulla</button>
                </>
            :   <button className="btn-edit" title="Edit Post" onClick={() => {
                    setIsEditing(true);
                }}>Modifica</button>
            }
            <button className="btn-delete" title="Elimina Post" onClick={() => {
                    props.deleteCallback(props.post.id);
                }}>
            </button>
        </div>
        <hr/>
        <p className="post-title">
            {isEditing === false 
                ? props.post.title
                : <input type="text" value={title} onChange={(e) => {
                    const valore = e.target.value;
                    setTitle(valore);
                }}></input>
            }
        </p>
        <p>
            {isEditing === false 
                    ? props.post.content
                    : <input type="text" value={content} onChange={(e) => {
                        const valore = e.target.value;
                        setContent(valore);
                    }}></input>
                }
        </p>
        <hr/>
        <div className="post-date">
            {props.post.date}
            {/* Condizione booleana che verifica se il post è stato modificato */
            props.post.isEdited 
                ? <div className="post-edited">Modificato</div>
                : <></>
            }
        </div>

    {/* se sono in modifica, faccio vedere quest'altro */}
    {/* blabla */}


    </div>


    );
}