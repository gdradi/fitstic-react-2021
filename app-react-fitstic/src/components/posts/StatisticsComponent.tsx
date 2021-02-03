import { Post } from "../../models/Post";

export interface StatisticsComponentProps {
    lista: Post[];
}

export let StatisticsComponent: React.FunctionComponent<StatisticsComponentProps> = (props) => {
    return (
        <div className="statistic">Numero di post: {props.lista.length}</div>
    )
}