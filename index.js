/// Javascript code to for prime number

var isPrime = function(num){
    // handling num less then 2 as prime starts from 2
    if(num < 2){
        return false;
    }

    var retValue = true;
    for(var idx = 2 ; idx < num ; ++idx){
           if(num % idx == 0){
               // if number is divided then not prime
               retValue = false;
               break;
           } 
    }

   return retValue;
}

// call function
console.log(isPrime(98));
console.log(isPrime(97));
console.log(isPrime(2));
