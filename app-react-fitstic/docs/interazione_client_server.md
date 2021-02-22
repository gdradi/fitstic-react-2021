## Interazione client server

1. Considerare l'interazione con il server come un caso particolare di interazione asincrona. Il risultato della vostra chiamata sarà reso a voi disponibile tramite una callback (analogamente al comportamento delle callback di onClick o onChange)
1. I dati ottenuti da una chiamata Ajax tipicamente devono essere memorizzati nella nostra applicazione. Perciò, normalmente, nella callback di una chiamata Ajax si salvano i dati appena ottenuti in una variabile di stato.
1. I dati ricevuti dalle API non sempre sono pronti per essere utilizzati direttamente dal client (dipende da come sono state fatte le api). Nel caso i dati non siano nel formato corretto/che vi aspettate, è necessario fare una operazione di mapping prima dell'effettivo salvataggio nello stato. Questo mapping deve convertire gli oggetti ricevuti dalle API nel formato che vi aspettate.


### Note
1. Le chiamate al server NON dovrebbero mai essere eseguite direttamente nel corpo della funzione di un componente: questo perchè, se così fosse, tali chiamate sarebbero eseguite a OGNI render del componente.




#### Thin vs Fat client

#### Server push (websocket)