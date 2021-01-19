import React from "react";
import ReactDOM from "react-dom";

/**
 * Creazione di un componente react di nome "App"
 * 
 * Questo componente visualizza un div con all'interno il testo ciao
 * 
 * Per utilizzare questo componente, la sintassi è <App /> 
 * 
 * <[nome] />   dove [nome] = App
 */
let App: React.FunctionComponent = () => {
    return <div>ciao!</div>
};


/**
 * Significato di questa riga:
 * 
 * dico a ReactDom di renderizzare il componente <App /> all'interno dell'elemento
 * del dom che ha id = "root" 
 * 
 * Attenzione: nella pagina index.html DEVE esistere un elemento
 * che abbia come id = "root"
 */
ReactDOM.render(  <App />,   document.getElementById('root') );