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
}

/**
 * Il componente "SinglePost" contiene la struttura html del singolo Post.
 * Riceve l'oggetto Post dall'array ciclato dal componente PostListComponent
 */
export const SinglePostComponent: React.FunctionComponent<PostProps> = (props) => {

    return (


    <div className="post-body">

        {/* se sono in visualizzazione, faccio vedere questo */}
        <div className="post-author">{props.post.author}</div>
        <div className="post-delete-btn">
            <button className="btn-delete" title="Elimina Post" onClick={() => {
                    props.deleteCallback(props.post.id);
                }}>
            </button>
        </div>
        <hr/>
        <p className="post-title">{props.post.title}</p>
        <p>{props.post.content}</p>
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