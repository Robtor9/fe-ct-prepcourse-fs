function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    var i=0, neu = num;
    var neuArray=[];
    while(i<=9){
        i++;
        
        console.log(i, neu, neuArray);
        
        if (i === 5){
            console.log("Saltó"); 
            continue;
        }
        neu= neu +2;
        neuArray.push(neu);
     }
     console.log(neuArray); 
          return neuArray;
 }
 
 continueStatement(50);
 
