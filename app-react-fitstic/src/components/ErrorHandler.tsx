export interface ErrorHandlerProps {
    readonly error: any
}

export const ErrorHandler: React.FunctionComponent<ErrorHandlerProps> = (props) => {

    return (
        <div>Errore!</div>
    );

}