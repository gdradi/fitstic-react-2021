

/**
 * Basic types
 */
const myString: string = "ciao";
const myNumber: number = 2.5;
const myBoolean: boolean = true;

// Type inference
let myString2 = 5;
//myString2 = "ciao";  // Se lo scommentate, da errore

// Definizione variabile condizionale
let stringaCondizionale: string;
if (true) {
    stringaCondizionale = "valore1"
    //stringaCondizionale = 1;
} else {
    stringaCondizionale = "valore2";
}


/**
 * Array
 */
const stringsArray: string[] = ["stringa1", "stinga"];
const numbersArray: number[] = [2,3,5];

/**
 * Enum che rappresenta il genere
 */
enum Gender {
    MALE = 0,
    FEMALE = 1,
};

let myGender = Gender.FEMALE;
//myGender = "aa"  // Se lo scommentate, da errore


/**
 * Contratto
 * 
 * Specifico che cosa una Shape può fare: 
 * 
 * - può restituire il numero di lati (getNumeroDiLati())
 * 
 *  l'interfaccia rappresenta COSA può essere fatto, non COME
 */
interface Shape {

    // COSA una shapre può fare (comportamento)
    getNumeroDiLati(): number;

}

class Triangle implements Shape {

    // COME la shape Triangolo implementa il comportamento
    getNumeroDiLati(): number {
        return 3;
    }
    
}


class Square implements Shape {

    // COME la shape Square implementa il comportamento
    getNumeroDiLati(): number {
        return 4;
    }

    metodoSpecificoDelloSquare() {
        console.log("ciao");
    }
    
}


let mySquare: Shape= new Square();
let mySquare2 = new Square();
mySquare = mySquare2;


/**
 * Poliformismo
 * 
 * Shape è un TIPO
 * 
 * Square e Triangle implementano entrambi Shape, quindi si dice
 * che entrambe sono di tipo Shape
 */
let myShape: Shape;
myShape = new Square();
myShape = new Triangle();



/***
 *  Funzione 
 * 
 *   fn(input) -> output
 */


 /**
  * 
  * Interfaccia funzionale
  * 
  * rappresenta COSA una funziona di quel tipo deve fare
  */
 interface Somma {
     /* ---   input -------*/ /* output */
     (n1: number, n2: number): number
 };

/**
 * Definizione di una funziona con sintassi "classica"
 */
 function sommaClassica(n1: number, n2: number): number {
    return n1+n2;
 }


/**
 * Definiziione della stessa identica funzione con sintassi "lambda"
 * 
 * La variabile sommaFunzionale è di tipo Somma. Questo significa che 
 * typescript è in grado di fare type inference su i parametri in input e l'output,
 * perchè li recupera dall'interfaccia funzionale Somma
 */
 let sommaFunzionale: Somma = (n1, n2) => {
    return n1+n2;
 }

 /**
  * Polimorfismo applicato alle funzioni
  */
 let myFunction: Somma;
 myFunction = sommaFunzionale;


 // Utilizzo della funzione
 let risultato = myFunction(1, 2);
