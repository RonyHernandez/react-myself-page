 
 function closestNumber() {
     var arrayNumbers = [40,33,55,10,44,90];
     var highestNum = 0;
     for(var i=0; i < arrayNumbers.length; i++){
         for(var l=0; l < arrayNumbers.length; l++){
             if(arrayNumbers[i] > arrayNumbers[l]){
                highestNum = arrayNumbers[i];
             }
        }
     }

     var numInHaft = highestNum / 2 ;

     for(var x=0; x < arrayNumbers.length; x++){

        if(numInHaft == arrayNumbers[x]){
            console.log('number exist on array the haft number is:', numInHaft);
        } 

    } 
    

    console.log(closestNumber);
 }

 closestNumber();