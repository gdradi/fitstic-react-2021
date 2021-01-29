import { useState } from "react";
import { Post } from "./Post";


interface CreatePostCallback {
    (post: Post): void;
}



interface CreatePostComponentProps {
    callback: CreatePostCallback;
}


export const CreatePostComponent: React.FunctionComponent<CreatePostComponentProps> = (props) => {
    // Valore imputato dall'utente
    let [contenutoValue, setContenutoValue] = useState<string>("");

    return <div>
        <input type="text" value={contenutoValue} onChange={(event) => {
             let valoreInputato = event.target.value;
             console.log(valoreInputato);
             setContenutoValue(valoreInputato);
        }} />
        <button onClick={() => {
            let nuovoPost: Post = {
                contenuto: contenutoValue,
                autore: null,
                data: new Date(),
                hashtag: null
            };
            props.callback(nuovoPost);
        }}>Crea</button>
    </div>;
};