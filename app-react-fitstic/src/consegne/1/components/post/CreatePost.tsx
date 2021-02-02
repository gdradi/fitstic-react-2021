import { useState } from "react";
import { CreatePostProps } from "./PostProps"



export let CreatePost: React.FunctionComponent<CreatePostProps> = (props) => {
    let [title, setTitle] = useState<string>("");
    let [content, setContent] = useState<string>("");
    let [author, setAuthor] = useState<string>("");

    return <div>
        <div className="h1 my-3">Inserisci Post</div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Titolo</span>
            </div>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />

        </div>


        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Autore</span>
            </div>
            <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Contenuto</span>
            </div>
            <textarea rows={10} className="form-control" value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
        </div>

        <div className="w-100 text-right">
            <button type="button" className="btn btn-success mb-4" onClick={() => props.callback({
                title: title,
                author: author,
                content: content,
                creationDate: new Date()
            })}>Salva</button>
        </div>


    </div>
}