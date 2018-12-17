//Problem 0

console.log("#0 Nick's Question: Find all the prime numbers between 1 and 1000.");

console.time("primeNumberList-time");

 var primeNumberList = function (range){
    var primeArray = [1];
    var testedValue = 1;
    for(i = 1; i < range; i++){
        testedValue += 1;
        
        for(j=1; j <= primeArray.length; j++){
            if(j === (Math.ceil(Math.sqrt(primeArray.length)))){
                primeArray.push(testedValue);
                break;
            }else if(testedValue % primeArray[j] !== 0){
                continue;
            }else if(testedValue % primeArray[j] === 0){
                break;
            }
        }
    if(i === (range-1)){
            primeArray.shift();
            return primeArray;
        }
    }
}

console.log(primeNumberList(1000));

console.timeEnd("primeNumberList-time");




//Problem 1 

console.log("#1 - If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000. ");

console.time("multipleSum-time");

function getSum(total, carry){
    return total + carry;
}

var multipleSum = function (a,b,c){
    for(var resultArray = [],i=1; i < c; i++){
        var result1 = a * i;
        var result2 = b * i;
        if(result1 >= c && result2 >= c){
            return resultArray.reduce(getSum);
            
        }else if(result1 % b == 0){            
            if(result2 < c){
                resultArray[2 * i] = result2;
            }
            
        }else if(result1 >= c){
            resultArray[2 * i] = result2;
            
        }else if(result2 >= c){
            resultArray[(2 * i) -1] = result1;
            
        }else{
        resultArray[(2 * i) -1] = result1;
        resultArray[2 * i] = result2;
        }
    }    
}

console.log(multipleSum(3,5,1000));

console.timeEnd("multipleSum-time");

//Problem 2

console.log("#2 - Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.");

console.time("evenFibSum-time");

function evenFibSum(maxValue){
  var lastValue = 2;
  var penultimateValue = 1;
  valueArray = [2];
    
  for(i=1; lastValue < (maxValue - penultimateValue); i++){
      lastValue += penultimateValue;
      penultimateValue = lastValue - penultimateValue;
      if(lastValue % 2 === 0){
        valueArray[i] = lastValue;
      }  
  }
    
return valueArray.reduce(getSum,0);
}

function getSum(total, carry){
    return total + carry;
}

console.log(evenFibSum(4000000));

console.timeEnd("evenFibSum-time");

//Problem 3

console.log("#3 - The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ");

console.time("largestPrimeFactor-time");

var largestPrimeFactor = function(value){
    var integer = value;
    var divisor = 2;
    
    while(integer >= divisor){
        var valueDivided = integer / divisor;
        
        if(integer == divisor){
            return divisor;
            
        }else if(integer % divisor !== 0){
            divisor++;
            continue;
        
        }else if(integer % divisor === 0){
            integer = valueDivided;
            continue;
        }
    }
}

console.log(largestPrimeFactor(600851475143));

console.timeEnd("largestPrimeFactor-time");

//Problem 4 - This one is broken. Unfinished.

//console.log("#4 - A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.")

//console.time("largestPal-time");

var largestPal = function(upperLimit){
    var upperLimitProduct = upperLimit * upperLimit;
    var palArray = [];
    for(i=1; i<upperLimitProduct; i++){
        var testedValue = upperLimitProduct - i;
        var testString1 = testedValue.toString();
        var testStringArray = testString1.split("");
        var testStringArrayReverse = testStringArray.reverse();
        var testString2 = testStringArrayReverse.join("");
        if(testString1 === testString2){
            for(j=1; j<5; j++){
               var testedProduct =  testedValue/(upperLimit - j);
                console.log(testedValue);
                if(testedValue % (upperLimit - j) === 0 && testedProduct < upperLimit){
                    palArray.push(testedValue);
                }
            }
        }
    }
    console.log(palArray);
    return Math.max.apply(null, palArray);
}

//console.log(largestPal(1000));

//console.timeEnd("largestPal-time");

//Problem 5 

console.log("#5 - 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?");

console.time("smallestMultiple");

function smallestMultiple(range){
    var multipleValue = 1;
    var primesOfRange = primeNumberList(range);
    var primeFactorsOf = [];
    for(i = 2; i <= range; i++){
        if(primesOfRange.includes(i)){
            continue;
           }
        primeFactorsOf[i] = [];
        factorValue = i;
        for(j=0; j<primesOfRange.length;j++){
            if(factorValue % primesOfRange[j] == 0){
                factorValue /= primesOfRange[j];
                primeFactorsOf[i].push(primesOfRange[j]);
                j-=1;
                continue;
            }
        }    
    }
    
    function removeBlanks(value){
    return value !=undefined;
    }
    var primeFactorsOfFiltered = primeFactorsOf.filter(removeBlanks);
    var factorCountOf = [];
    
    for(k = 0; k < primesOfRange.length; k++){
        factorCountOf[primesOfRange[k]] = 1;
        for(l = 0; l < primeFactorsOfFiltered.length; l++){
            var count = 0;
            for (m = 0; m < primeFactorsOfFiltered[l].length; m++){   
                if (primeFactorsOfFiltered[l][m] === primesOfRange[k]){
                    count++
                }
            }
            if(count >factorCountOf[primesOfRange[k]]){
            factorCountOf[primesOfRange[k]] = count;
            }
        }
    }
    
    var factorCountOfFiltered = factorCountOf.filter(removeBlanks);
    var productOfPrimeFactors = 1;
    
    for(n=0;n<primesOfRange.length; n++){
        productOfPrimeFactors *= Math.pow(primesOfRange[n], factorCountOfFiltered[n])
    }
    return productOfPrimeFactors;
}

console.log(smallestMultiple(20));

console.timeEnd("smallestMultiple");

    //Michael's Solution

var michael = function(value){
    for (integer = 1; integer < Infinity; integer++){
        var j = 1;
        while (integer % j === 0){
            j++;
            if(j === value){
                return integer;
            }
        }
    }
}

//Problem 6

console.log("#6 - Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.")

console.time("sumProductDifference-time");

function sumProductDifference(range){
    var sumOfSquares = 0;
    for(i = 1; i <= range; i++){
        sumOfSquares += Math.pow(i,2);
    }
    var squareOfSums = 0;
    for(j = 1; j <= range; j++){
       squareOfSums += j;
    }
    squareOfSums = Math.pow(squareOfSums,2);
    return (squareOfSums - sumOfSquares);
}

console.log(sumProductDifference(100));

console.timeEnd("sumProductDifference-time");

//Problem 7

console.log("#7 - What is the 10,001st prime number?");

console.time("primeIternation-time");

function primeIternation(number, primeIternation){
    primeNumberArray = primeNumberList(number);
    return primeNumberArray[primeIternation];
}

console.log(primeIternation(150000,10001));

console.timeEnd("primeIternation-time");

//Problem 8

console.log("#8 - Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?");

console.time("dumbLargeNumberProblem-time");

function dumbLargeNumberProblem(){
    var largenumber1 = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
    var largeNumberArray = largenumber1.split('');
    var largeProductArray = [];
    for(i = 0; i <= largeNumberArray.length; i++){
        largeProductArray.push(largenumber1[i] * largenumber1[i + 1] * largenumber1[i + 2] * largenumber1[i + 3] * largenumber1[i + 4] * largenumber1[i + 5] * largenumber1[i + 6] * largenumber1[i + 7] * largenumber1[i + 8] * largenumber1[i + 9] * largenumber1[i + 10] * largenumber1[i + 11] * largenumber1[i + 12]);
    }  
    largeProductArray.sort(function(a, b){return b - a});
    return largeProductArray[0];
}

console.log(dumbLargeNumberProblem());

console.timeEnd("dumbLargeNumberProblem-time");

//Problem 9

console.log("#9 - There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.");

console.time("pythagoreanTriplet-time");

function pythagoreanTriplet(product){
    var allTriples = [];
    var matchingTriples = [];
    var matchingTripleProducts = [];
    for(j=1; j<= (product/2); j++){
        var a = Math.pow(j,2);
        for(k=1; k<= (product/2); k++){
            var b = Math.pow(k,2);
            for(l=1; l <= (product/2); l++){
                var c = Math.pow(l,2);
                if((a + b) === c){
                    a = Math.sqrt(a);
                    b = Math.sqrt(b);
                    c = Math.sqrt(c);
                    allTriples[j] = [];
                    allTriples[j].push(a,b,c);
                    if((a + b + c) === product){
                        matchingTriples.push(a,b,c);
                        matchingTripleProducts.push((a * b * c));
                    } 
                }
            }
        }
    }
    console.log(allTriples);
    console.log(matchingTriples);
    return matchingTripleProducts;
}

pythagoreanTriplet(1000);

console.timeEnd("pythagoreanTriplet-time");
/*
    var tripleTable = [];
    var tripleTableProduct = [];
    for(i=1; i <= product; i++){
        var a = Math.pow(i+1,2) - Math.pow(i,2);
        var b = 2 * (i + 1) * i;
        var c = Math.pow(i+1,2) + Math.pow(i,2);
        tripleTable[i] = [a, b, c];
        tripleTableProduct[i] = a + b + c;
        if((a+b+c) === product){
            return (a,b,c);
        }

*/

//Constructor Function testing

var Student = function(firstName, lastName, gradeLevel, band, instrument){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradeLevel = gradeLevel;
    this.band = band;
    this.instrument = instrument;
    this.classGrades = new Array();
    this.gradeInput = function gradeInput(newGrade){
        this.classGrades.push(newGrade);
    };
    this.getAverage = function getAverage(){
        var classGrades = this.classGrades;
        var sum = 0;
        for(i = 0; i < classGrades.length; i++){
            sum += classGrades[i];
        }
        var avg = sum/classGrades.length;
        return avg;
    };
}

var student1 = new Student("Chris", "Fauries", "12", "Honor", "Percussion");
var student2 = new Student("Michael", "Bergeron", "11", "Honor", "Clarinet");


