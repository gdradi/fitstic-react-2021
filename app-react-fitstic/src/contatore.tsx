import React, { useEffect, useState } from "react";


export let Contatore: React.FunctionComponent = () => {
    /**
     * Identifico qual è lo stato
     * per questo componente, decidiamo che lo stato è un numero,
     * che rappresenta il valore corrente del contatore
     */

     /**
      * Lettura "in italiano" di questa istruzione
      * 'in questo componente esiste uno stato di tipo number
      * inizializzato a 0 rappresentato dalla variabile count.
      * Tale stato è modificabile tramite il metodo setCount'
      */
    let [count, setCount] = useState<number>(0);
    let [data, setData] = useState<Date>(new Date());

    let [inputValue, setInputValue] = useState<string>("");
    let [passwordValue, setPasswordValue] = useState<string>("");

    /**
     * Per modificare lo stato, 
     * !!NON si deve modificare la variabile direttamente!!
     * count = ....    NO!
     * 
     * Il modo giusto è utilizzare la funzione setCount.
     * Il parametro della funzione setCount è il nuovo valore
     * che la variabile stato deve avere
     * 
     * 
     * NB!
     * Ogni volta che si modifica lo stato tramite la chiamata
     * alla funzione setCount(..), il componente viene RIDISEGNATO!
     *
     */



     /**
      * Lifecycle hook
      * 
      * Ogni componente ha il suo ciclo di vita ->
      * 1. Inizialmente viene montato (mounting)
      * 2. Dopo che è stato montato, può ridisegnarsi (re-render)
      * 3. Opzionalmente, potrebbe essere smontato (unmounting)
      * 
      * Questi 3 step sono eventi del ciclo di vita del componente
      * 
      * Per ciascuno di questi eventi, è possibile definire una funzione che react
      * eseguirà nel momento in cui si verifica quell'evento
      */


      /**
       * Lifecycle hook del montaggio
       * 
       * (equivalente come significato all'onCreate delle activity Android,
       * oppure all'ngOnInit() di angular)
       * 
       * si utilizza la funzione nativa di react useEffect(..)
       * questa funzione vuole due parametri:
       * 
       * il primo, è la nostra funzione che sarà eseguita al momento opportuno 
       * (quindi al montaggio, in questo caso)
       * il secondo è un array vuoto [] <- (obbligatorio per l'evento di montaggio)
       */
     
    useEffect(() => {
         console.log("mounting!");

         let myFunction = () => {
            /**
             * Abbiamo detto che non posso fare
             * count = count+1
             * perchè non si può intervenire direttamente sulla variabile dello stato,
             * ma bisogna usare il setter  (setCount)
             */
            //console.log("Esecuzione di setInterval", count);
            //setCount(count +1);
            setData(new Date());
        };

         setInterval(myFunction, 1000);

        /**
         * Questa funzione è il lifecycle hook di unmounting
         * 
         * equivalente a onDestroy() di android oppure
         * ngOnDestroy()
         */
        return () => {
            console.log("unmounting!");
        }
     }, []);



     let callbackDelBottone = (e: React.MouseEvent) => {
        console.log("Premuto il tasto incremento", e);
        setCount(count +1);

        console.log(inputValue);
        //count = count+1;
    };

    return <div>
        <div>Contatore</div>
        <div>Valore: {count}</div>
        <div>Data: {data.toString()}</div>
        <button onClick={callbackDelBottone}>Incremento</button>

        <div className="box">

            {/* Input di tipo CONTROLLED */}
            <input type="text" value={inputValue} onChange={(event) => {
                let valoreInputato = event.target.value;
                console.log(valoreInputato);
                setInputValue(valoreInputato);
            }} />
            <div>InputValue: {inputValue}</div>

            <input type="password" value={passwordValue} onChange={(event) => {
                let valoreInputato = event.target.value;
                console.log(valoreInputato);
                setPasswordValue(valoreInputato);
            }} />
            <div>PasswordValue: {passwordValue}</div>
            <div><button onClick={() => {
                console.log("Login dell'utente", inputValue, "con password", passwordValue)
            }}>Login</button></div>
        </div>
    </div>
}

/**
 *  single source of truth
 * 
 */