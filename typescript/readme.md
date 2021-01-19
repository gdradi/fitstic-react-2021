## Setup ambiente

1. Installare lite-server  `npm install -g lite-server`
1. Installare typescript `npm install -g typescript`

## Setup compilazione typescript

1. Configurare il compilatore `tsc --init`
1. Aprire il file `tsconfig.json` appena generato e modificare la seguente riga:
```json
// Decommentare e modificare 

"strictNullChecks": true,

// in ->

"strictNullChecks": false,
```

## Esecuzione file typescript su browser
1. Creazione di index.html e main.ts
1. Compilazione del file typescript in javascript con il comando `tsc`. Questo comando produce il file main.js, che è la traduzione javascript del file typescript main.ts. Opzionalmente, potete lanciare il comando con l'opzione `-w` (`tsc -w`). In questo modo i vostri file saranno compilati automaticamente a ogni salvataggio.
1. Per poter eseguire il codice su browser, è necessario che questo codice sia reso disponibile da un server web. Perciò dobbiamo istanziarlo. Possiamo istanziare un server locale, nella cartella corrente, attraverso il comando `lite-server`. Questo comando crea un server alla porta 3000, raggiungibile all'indirizzo `http://localhost:3000`.


## (Opzionale) Migliorie ambiente di lavoro
Non è una buona idea avere all'iterno della stessa cartella sia i sorgenti typescript che file javascript generati. L'approccio più comune è quello di inserire tutti i file typescript nella cartella sorgenti ```src```, e tutti i file compilati nella cartella `dist`. Per farlo, è necessario specificare queste cartelle nel file `tsconfig.json`:
```json
"outDir": "./dist",          
"rootDir": "./src",   
```
**Attenzione**! Se configurate l'ambiente in modo che i file javascript finiscano nella cartella `dist`, dovete cambiare il loro percorso nei file .html! 
```html
<script src="./main.js"></script>
// deve diventare
<script src="/dist/main.js"></script>
```
