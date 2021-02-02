import { Post } from "./Post";


export interface DeletePostCallback {
    (id: number): void;
}


interface PostComponentProps {
    post : Post;
    deleteCallback: DeletePostCallback;
}

export const PostComponent: React.FunctionComponent<PostComponentProps> = (props) => {
    return <>
            <div className="box">
                <div className="">Id: {props.post.id}</div>
                <div className="autore-post">
                    <p className="text">AUTORE</p>
                   <h2>{props.post.autore}</h2>                  
                </div>
                <p className="text">HASHTAG</p>
                <div>{props.post.hashtag}</div>
                <div className="tw-post">
                    <p className="text">CONTENUTO</p>
                    <div>{props.post.contenuto}</div>
                </div>
                <div className="data-post">
                    <p className="text">DATA DI PUBBLICAZIONE</p>
                    <div>{props.post.data.toString()}</div>
                </div>

                <button onClick={() => {
                    console.log("bottone eliminazione premuto");
                    props.deleteCallback(props.post.id);
                }}>Elimina</button>
            </div>
        </>
};