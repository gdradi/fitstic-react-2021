import { formatDate } from "../../utils/DateUtils";
import { PostProps } from "./PostProps";

export let PostView: React.FunctionComponent<PostProps> = (props) => {
    return (
        <div className="card mb-4">
            <div className="card-header bg-primary">
                <h5 className="card-title text-white">{props.post.title}</h5>
                <div className="card-subtitle text-white">{props.post.author}</div>
            </div>
        <div className="card-body">
            <div className="row">
                <div className="col-12">
                    {props.post.content}
                </div>
            </div>
        </div>

        <div className="card-footer bg-primary">
            <div className="text-white">Data di Pubblicazione: {formatDate(props.post.creationDate)}</div>
        </div>
    </div>
    )
}