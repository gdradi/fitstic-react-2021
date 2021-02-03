import { useState } from "react";
import { Post } from "../../models/Post";

export interface CreatePostCallback {
    (post: Post): void;
}

interface CreatePostComponentProps {
    createCallback: CreatePostCallback;
}

/**
 * CreatePostComponent contiene il form di inserimento di un nuovo post
 * esso chiede in ingresso un callback che notificherà all'esterno il Post creato.
 */
export const CreatePostComponent: React.FunctionComponent<CreatePostComponentProps> = (props) => {
    let [titleValue, setTitleValue] = useState<string>("");
    let [contentValue, setContentValue] = useState<string>("");
    let [idValue, setIdValue] = useState<number>(1);

    return <div className="create-post-body">
        <div className="create-post-author">Me</div>        
        <hr/>
        <div className="create-post-input">
            <input className="input-title" placeholder="Inserisci il titolo" type="text" value={titleValue} onChange={(event) => {
                let valoreInputato = event.target.value;
                setTitleValue(valoreInputato);
            }} />
            <textarea className="input-textarea" placeholder="A cosa stai pensando?" value={contentValue} onChange={(event) => {
                let valoreInputato = event.target.value;
                setContentValue(valoreInputato);
            }} />
        </div>
        <hr/>
        <div className="btn-container">
            <button className="btn-create-post" onClick={() => {

                let nuovoPost: Post = {
                    id: idValue,
                    author: "Me",
                    title: titleValue,
                    content: contentValue,
                    date: new Date().toLocaleString(),
                    isEdited: false
                };

                setIdValue(idValue+1);
                props.createCallback(nuovoPost);
                
                setTitleValue("");
                setContentValue("");
            }}>Pubblica</button>
        </div>
    </div>;
};