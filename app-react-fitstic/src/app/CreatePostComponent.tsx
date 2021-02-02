import { useState } from "react";
import { Post } from "./Post";

export interface CreatePostCallback {
    (post: Post): void;
}

interface CreatePostComponentProps {
    callback: CreatePostCallback;
}

export const CreatePostComponent: React.FunctionComponent<CreatePostComponentProps> = (props) => {
    // Valore imputato dall'utente
    let [contenutoValue, setContenutoValue] = useState<string>("");
    let [autoreValue, setAutoreValue] = useState<string>("");
    let [hashtagValue, setHashtagValue] = useState<string>("");
    let [idValue, setIdValue] = useState<number>(0);


    return <div>
        <p className="form" > Autore</p>
        <div className="form"> 
             <input type="text" value={autoreValue} onChange={(event) => {
             let valoreAutoreInputato = event.target.value;
             console.log(valoreAutoreInputato);
             setAutoreValue(valoreAutoreInputato);
        }} />
        </div>
       
        <p className="form">Contenuto</p>
        <div className="form">
             <input type="text" value={contenutoValue} onChange={(event) => { 
             let valorecontenutoInputato = event.target.value;
             console.log(valorecontenutoInputato);
             setContenutoValue(valorecontenutoInputato);
        }} /> 
        </div>
       
        <p className="form">Hashtag</p>
        <div className="form">       
            <input type="text" value={hashtagValue} onChange={(event) => {           
             let valoreHashtagInputato = event.target.value;
             console.log(valoreHashtagInputato);
             setHashtagValue(valoreHashtagInputato  );
        }} />
        </div>
   
        
        <button className="btn" onClick={() => {
            let nuovoPost: Post = {
                id: idValue,
                contenuto: contenutoValue,
                autore: autoreValue,
                data: new Date(),
                hashtag: hashtagValue
            };
            setIdValue(idValue+1);

            // CHIAMATA della callback ricevuta in input
            // passando come parametro il post appena creato
            props.callback(nuovoPost);

        }}>Crea</button>
    </div>;
};