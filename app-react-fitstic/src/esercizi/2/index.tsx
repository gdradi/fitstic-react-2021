import React from "react";
import ReactDOM from "react-dom";

import "./styles/app.css"


/**
 *  1. Modellare il concetto di Post (scegliete voi che caratteristiche ha un post: titolo, contenuto, data, autore, ecc)
 *  2. Creare la lista di Post
    3. Creare un componente in grado di visualizzare genericamente un Post

    4. Creare un componente che visualizzi la lista di post al punto 2 utilizzando il componente al punto 3.
 */




interface ViewPostProps{
    post : Post
}
const ViewPost: React.FunctionComponent<ViewPostProps> = (props) => {
    return <>
            <div className="cont-post">
                <div className="autore-post">
                   <h3>{props.post.autore}</h3>
                   <div>{props.post.hashtag}</div>
                </div>
                <div className="tw-post">
                    <div>{props.post.contenuto}</div>
                </div>
                <div className="data-post">
                    <div>{props.post.data.toString()}</div>
                </div>
            </div>
        </>
};


interface Post {
    autore: string;
    hashtag: string;
    contenuto: string;
    data: Date;   
}





let nPost:number;
let cont:number = 0;

const App: React.FunctionComponent = () => {


let post1: Post = {
    autore: "Andrew Malcom",
    hashtag: "@AHMalcolm",
    contenuto: "Per ogni retweet, Pedigree donerà una ciotola di cibo a un cane bisognoso!",
    data: new Date()   
};
let post2: Post = {
    autore: "zayn",
    hashtag: "@zaynmalik",
    contenuto: "Ho 22 anni e sono innamorato di una ragazza che si chiama Perrie Edwards. Il mondo è pieno di invidiosi, non è come sembra e mi spiace che vi siate fatti questa idea",
    data: new Date() 
};
let post3: Post = {
    autore: "Niall Horan",
    hashtag: "@NiallOfficial",
    contenuto: "Fatto domanda per entrare a X-Factor, speriamo che vada tutto bene",
    data: new Date()   
};
let post4: Post = {
    autore: "Ellen DeGeneres",
    hashtag: "@TheEllenShow",
    contenuto: "Se solo il braccio di Bradley fosse stato più lungo. La migliore foto di sempre. #oscars",
    data: new Date()   
};

let listPost : Post[] = [post1,post2,post3,post4]

    nPost = listPost.length;

    let postDaVisualizzare: Post = listPost[cont];

    return <>
            <ViewPost post={postDaVisualizzare} />

            {/* {listPost.map((item:Post, index) => <div key={index}>
            {console.log(cont)}
            {index === cont && <ViewPost post={item} /> }
                             
                </div>
       
            )}    */}
    </>
};


/**
 * Ridisegna l'app react ogni 2 secondi
 */
function myFunction() {
    ReactDOM.render(<App />, document.getElementById('root'));
};
setInterval(myFunction, 1000);
//////////////////////////////


/**
 * Esecuzione della funzione contatore() ogni 5 secondi
 */
function contatore(){
    if(cont !== nPost-1){
        cont = cont + 1;
    }else{
        cont = 0
    }
}
setInterval(contatore, 5000);
/////////////////////////

