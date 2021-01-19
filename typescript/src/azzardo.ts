abstract class Azzardo {
   
    abstract Lancia(): number;      
    
}

class Dado extends Azzardo {
   
    Lancia():number {
        var numero_estratto: number = getRandomInt(1, 6);
        return numero_estratto;
    }
}

class Moneta extends Azzardo {
    
    Lancia():number {
        var faccia_estratta : number = getRandomInt(0,1)
        return faccia_estratta;
        
    }
}

function getRandomInt(val_min:number, val_max:number): number {
    let min : number = Math.ceil(val_min);
    let max: number = Math.floor(val_max);
    var rndm: number = Math.floor(Math.random() * (max - min + 1)) + min; 
    return rndm;
  }

  
function AvviaLancio() {
    let OggLanciato : Azzardo;
    var valoreLancio : number = 0;
    var opzioni = document.getElementsByName("scelta");
    let selezione =(<HTMLInputElement> document.querySelector("input[name = scelta]:checked")).value;
    

    if(selezione == "dado") 
    {   
        OggLanciato = new Dado();
        valoreLancio  = OggLanciato.Lancia();
        document.getElementById("ValLancio").innerHTML = valoreLancio.toString();
    }
    else if (selezione = "moneta")
    {   
        OggLanciato = new Moneta();
        valoreLancio = OggLanciato.Lancia();
        if (valoreLancio == 1)
        {
            document.getElementById("ValLancio").innerHTML = "CROCE";
        }
        else
        {
            document.getElementById("ValLancio").innerHTML = "TESTA";
   
        }
    }
}