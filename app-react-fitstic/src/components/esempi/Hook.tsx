import React, { useEffect, useState } from "react";


const fetchDataFromMyServer = () => {
    // chiamate ajax
    return Promise.resolve([1, 2, 3]);
}


export const HookExample: React.FunctionComponent<{
    readonly date: Date;
}> = (props) => {

    const [listDiNumber, setListaDiNumber] = useState<number[]>(null);


    const fetchDataAndSetState = async () => {
        const data = await fetchDataFromMyServer();
        setListaDiNumber(data);
    };



    /**
     *  DEFINIZIONE GENERALE DELL'HOOK useEffect:
     * 
     *  Ogni volta che una qualsiasi delle variabili all'interno dell'array (secondo parametro) cambia valore
     *    -> esecuzione della callback (primo parametro)
     */


    /** 
     * Caso 1: nessuna variabile nell'array 
     * -> []
     * 
     * comportamento:
     *      - la callback viene chiamata SOLO al primo montaggio del componente. Questo perchè un array vuoto non può cambiare valore
     * 
     * motivo di utilizzo:
     *      - caricamento di dati (es: chiamata ajax) all'avvio dell'app/del componente
     */
    useEffect(() => {
        console.log("useEffect con []");
        fetchDataAndSetState();
    }, []);



    /** 
    * Caso 2: variabili nell'array
    * 
    * comportamento:
    *      - la callback viene chiamata ogni volta che almeno una delle variabili cambia valore
    * 
    * motivo di utilizzo:
    *      - ??
    */
    useEffect(() => {
        console.log("useEffect con [props.date]. Valore ricevuto:", props.date.toLocaleTimeString());
    }, [props.date]);


    return (<>
        <div>Hook example</div>
        <div>{listDiNumber}</div>
        <div>{props.date.toLocaleTimeString()}</div>
        <button onClick={() => {
            fetchDataAndSetState();
            // altro metodo
            // altro metodo ancora
        }}>refresh</button>
    </>
    )
}






/***
 * 
 * Props del componente:  - oggetto da modificare
 * Gli stati del compoennte sono le proprietà di questo oggetto che voglio modificare nel form * 
 * Gli input del form sono controllati da questi stati
 * 
 * Istante t1 = montaggio del componente con props  item={Oggetto1} -> inizializzazione degli stati con i valori di Oggetto1
 *      const [titolo, setTitolo] = useState(props.item.titolo);
 *      const [setContenuto, setContenuto] =  useState(props.item.contenuto);
 * Istante t2 = l'utente modifica un valore in un input  ->  chiamata al setState della proprietà modificata dall'utente
 * 
 * Istante t3 = componente ridisegnato per cambio props  item={Oggetto2}    ->  in questo caso gli stati NON si resettano, perchè è un semplice ridisegno, non è il primo montaggio
 * 
 * !!!! PROBLEMA! la props è Oggetto2 ma i vostri stati contengono i valori di Oggetto1 !!!!!
 * 
 * 
 * Soluzione?
 * 
 * useEffect(() => {
 *      // Reset di tutti gli stati relativi al form
 *      setTitolo(props.item.titolo);
 *      setContenuto(props.item.contenuto);
 * }, [props.item])
 * 
 */






/***
 * 
 * const [user, setUser] = useState(null);
 * 
 * 
 * 
 * useEffect(() => // Caricamento dell'utente da API e setUser(..));
 * 
 * 
 * return (
 * {user == null && "loading" }
 * {user != null && <>
 *  <Figlio1   user={user} />
 *  <Figlio2   user={user} />
 * </>}
 * )
 */