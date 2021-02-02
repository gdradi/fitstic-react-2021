import { Post } from "./Post"


export interface StatisticsComponentProps {
    lista: Post[];
}

export let StatisticsComponent: React.FunctionComponent<StatisticsComponentProps> = (props) => {
    return (
        <div>Numero di post: {props.lista.length}</div>
    )
}