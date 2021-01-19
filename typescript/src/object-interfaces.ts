interface Point {
    x: number;
    y: number;
}


let myPoint1: Point = {
    x: 2,
    y: 6
};

let myPoint2: Point = {
    x: 1,
    y: 2
}

console.log(`Coordinata x: ${myPoint1.x}`);
console.log("Coordinata x: " + myPoint1.x);


function sommaDiPunti(point1: Point, point2: Point): Point {
    let result: Point = {
        x: point1.x + point2.x,
        y: point1.y + point2.y
    };
    return result;
}

let myPointSomma = sommaDiPunti(myPoint1, myPoint2);
console.log(`Punto somma  [x: ${myPointSomma.x}; y: ${myPointSomma.y}]`);


// Esempio di somma tra numeri e stringhe. L'ordine conta!
// let n1 = 1;
// let n2 = 2;
// console.log(n1.toString()+n2+"ciao");



/**
 *  Concetto di interfaccia per struttura dati in C#
 * 
 *  In C# non si usano le interfacce ma le classi
 * 
 *  Il significato è però equivalente
 */
// class Point {

//     public int x {get; set;}
//     public int y {get; set;}

// }
// var myPoint = new Point();
// myPoint.x = 1,
// myPoint.y = 2
// var myPoint = new Point() {
//     x = 1,
//     y = 2
// }

