import { Post } from "./Post";


interface PostComponentProps {
    post : Post
}

export const PostComponent: React.FunctionComponent<PostComponentProps> = (props) => {
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