

//Problem 0

console.time("primeNumberList-time");

var primeNumberList = function(range){
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

console.time("primeIternation-time");

function primeIternation(number, primeIternation){
    primeNumberArray = primeNumberList(number);
    return primeNumberArray[primeIternation];
}

console.log(primeIternation(150000,10001));

console.timeEnd("primeIternation-time");

//Problem 8

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

//Problem 12

console.time("divisibleTriangleNumber-time");

function divisibleTriangleNumber(limit=500){
    var currentTriangleValue = 1;
    var numOfDivisors = 0;
    for(i=2; i<15000; i++){
        currentTriangleValue += i;
        var divisorHolder = 0;
        for(j=1; j<=Math.sqrt(currentTriangleValue); j++){
            if(currentTriangleValue % j === 0){
                divisorHolder += 2;
            }
        }
        if(divisorHolder>numOfDivisors){
            numOfDivisors = divisorHolder;
        }
        if(numOfDivisors>=limit){
            return currentTriangleValue;
        }
    }
}

console.log(divisibleTriangleNumber());

console.timeEnd("divisibleTriangleNumber-time");

//Problem 14

console.time('Longest-Collatz-Sequence');

function longestChain(range) {
	var longestChainLength = 0;
	var longestChainValue = 0;
	var currentValue;
	for(let i=1; i<=range; i++) {
		currentValue = i;
		for(let j=1; j< Infinity; j++) {
			if(currentValue === 1) {
				if(j > longestChainLength) {
					longestChainLength = j;
					longestChainValue = i;
				}
				break;
			} else if (currentValue % 2 !== 0) {
					currentValue = (currentValue * 3) + 1;
					continue;
			} else {
					currentValue /= 2;
					continue;
			}
			
		}
	}
	return [longestChainLength, longestChainValue];
}

console.log(longestChain(1000000));

console.timeEnd('Longest-Collatz-Sequence');


//Problem 16

console.time('Power-digit-sum');

function powerDigitSum() {
	var bigN = 2n ** 1000n;
	return bigN.toString().split('').reduce((a,b) => a + Number(b),0);
}


console.log(powerDigitSum());

console.timeEnd('Power-digit-sum');


//Problem 17

console.time('addUpLetters');

function addUpLetters () {
	var total = 0;
	var oneToTwentyArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	
	total += oneToTwentyArr.join('').length;

	var oneToNineArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var twentyToNintyTensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	
	total += twentyToNintyTensArr.join('').length;
	
	twentyToNintyTensArr.forEach(function(tens) {
		oneToNineArr.forEach(function(ones) {
			var str = tens + ones;
			total += str.length;
		});
	});
	
	oneToNineArr.forEach(function(hundreds) {
		var str = hundreds + 'hundred' + 'and'
		var hundredsLength = hundreds + "hundred"
		total += (str.length * 99) + 854 + hundredsLength.length;
	});
	
	total += 11;
	
	
	
	return total;
	
	
}

console.log(addUpLetters());

console.timeEnd('addUpLetters');


// Problem 18

console.time('highestSumInPyramid');

var pyramidArr = 
[
[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20, 04, 82, 47, 65],
[19, 01, 23, 75, 03, 34],
[88, 02, 77, 73, 07, 63, 67],
[99, 65, 04, 28, 06, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
]


function highestSum (arr) {
	var highestSum = 0;
	var possibleOutcomes = 2 ** arr.length;
	for(i=0; i<= possibleOutcomes; i++) {
		var binaryIncrement = i.toString(2).padStart(arr.length, '0');
		var currentSum = arr[0][0];
		for(j=1; j< arr.length; j++) {
			var position = binaryIncrement.slice(0, (j + 1))
										 .split('')
										 .reduce(function(a,b){if(b === '1'){return ++a;} else {return a;}}, 0);
			currentSum += arr[j][position];
		}
		if(currentSum > highestSum) {
			highestSum = currentSum;
		}
	}
	return highestSum;
}

console.log(highestSum(pyramidArr));

console.timeEnd('highestSumInPyramid');


// Problem 19

function whatDay(day) {
	var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var leapMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var currentFirstDay = day;
	var totalSundays = 0;
	for(i=1; i<=100; i++) {
		if(i % 4 !== 0) {
			months.forEach(function(month) {
				currentFirstDay += (month % 7);
				if(currentFirstDay > 7) {
					currentFirstDay -= 7;
				}
				if(currentFirstDay === 7) {
					totalSundays++;
				}
			});
		} else {
				leapMonths.forEach(function(month) {
				currentFirstDay += (month % 7);
				if(currentFirstDay > 7) {
					currentFirstDay -= 7;
				}
				if(currentFirstDay === 7) {
					totalSundays++;
				}
			});
		}
	}
	return totalSundays;
}


//Problem 20

console.time('factorialSum');

function factorialSum(value) {
	value = BigInt(value);
	var factorial = 1n;
	for(i=value; i>0n; i--) {
		factorial *= i;
	}
	return factorial.toString().split('').reduce((a,b) => a + Number(b),0);
}

console.log(factorialSum(100));

console.timeEnd('factorialSum');

//Problem 21

console.time('sumOfAmicableNumbers');

function sumOfAmicableNumbers(range) {
	let amicablePairArr = [];
	
	for(let i = 0; i < range; i++) {
		var currentDivisorSum = findDivisorSum(i);
		var DivisorSumOfSum = findDivisorSum(currentDivisorSum);
		if((i === DivisorSumOfSum) && (i !== currentDivisorSum)) {
			amicablePairArr.push(i);
			amicablePairArr.push(currentDivisorSum);
		}
	}
	
	function findDivisorSum(num) {
		if(num <= 1) {
			return 0;
		}
		let arr = [];
		for(let i =0; i< num; i++) {
			if(num % i === 0) {
				arr.push(i);
			}
		}
		
		return arr.reduce((a,b) => a + b);
	}
	
	return amicablePairArr.filter((item, index) => amicablePairArr.indexOf(item) >= index).reduce((a,b) => a + b);
}

console.log(sumOfAmicableNumbers(10000));

console.timeEnd('sumOfAmicableNumbers');

//Problem 22

var nameTextFile = new XMLHttpRequest();
nameTextFile.open('GET', '/names.txt');
nameTextFile.onreadystatechange = function() {
	if(nameTextFile.readyState === 4) {
		var namesArr = JSON.parse(nameTextFile.response);
		console.log(sumOfNameScores(namesArr));
	}
}
nameTextFile.send();

function sumOfNameScores (arr) {

	return arr.sort().reduce(function(sum,name) {
		var nameScore = charSum(name) * (arr.indexOf(name) + 1);
		return sum + nameScore;
	}, 0);
	
	function charSum (str) {
		var charSum = 0;
		for(i =0; i< str.length; i++){
			charSum += (str.charCodeAt(i) - 64);
		}
		return charSum;
	}
}


//Problem 23

console.time('sumOfNumbersThatAreNotTheSumOfTwoAbundantNumbers');

function sumOfNumbersThatAreNotTheSumOfTwoAbundantNumbers (range) {
	
	var abdundantPairSumsArr = sumOfAbundantPairs(abundantNumbersArray(range));
	var answer = [];
	for(let i=0; i < range; i++) {
		if(abdundantPairSumsArr.indexOf(i) === -1) {
			answer.push(i);
		}
	}
	
	return answer.reduce((a,b) => a + b);
	
	function sumOfAbundantPairs(arr) {
		var pairsSumArr = [];		
		for(let i=0; i< arr.length; i++) {
			for(let j=0; j < (arr.length - i); j++) {
					pairsSumArr.push(arr[i] + arr[j + i]);
			}
		}
		return pairsSumArr;
	}

	function abundantNumbersArray (range) {
		var arr = [];
		for(let i=1; i< range; i++) {
			var currentDivisorSum = 0;
			for(let j=1; j < i; j++) {
				if(i % j === 0) {
					currentDivisorSum += j;
				}
			}
			if(currentDivisorSum > i) {
				arr.push(i);
			}
		}
		return arr;
	}

}

console.log(sumOfNumbersThatAreNotTheSumOfTwoAbundantNumbers (28123));

console.timeEnd('sumOfNumbersThatAreNotTheSumOfTwoAbundantNumbers');

//BALLLER SOLUTION TO Problem 23

function getProperDivisors(num) {
    let divisors = [];
    let sq = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sq; i++) {
        if (num % i == 0) {
            divisors.push(i, (i * i == num) ? 0 : num / i);
        }
    }
    let sum = 1;
    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }
    return sum - num > 0;
}

let sum = 0;
let abuNums = [];
mainloop:
for (let i = 1; i < 28124; i++) {
    abuNums[i] = getProperDivisors(i);
    for (x = 0; x <= i / 2; x++) {
        if (abuNums[i - x] && abuNums[x]) {
            continue mainloop;
        }
    }
    sum += i;
}

console.log(sum);



//Problem 24

var permArr = [0,1,2,3,4,5,6,7,8,9];


function findPermutationsOfArray(perm) {
	
	perm.sort(function(a,b) {return a-b});
	
	var answerArr = perm;
	var permCount = possiblePerms(perm);
	var currentPerm = perm;
	
	for(i=1; i <= permCount; i++) {
		currentPerm = getNextPermutation(currentPerm);
		if(currentPerm === false) {
			return answerArr;
		} else {
			answerArr[i] = currentPerm;
		}
	}
	
	function possiblePerms (arr) {
		var answer = 1;
		for(var i = arr.length; i >= 1; i--) {
			answer *= i;
		}
		return answer;		
	}
	
	function getNextPermutation (currentPerm) {
		
		var arr = [...currentPerm];
		
		//Find largest X
		var largestX = -1;
		for(var i=0; i < arr.length - 1; i++) {
			if(arr[i] < arr[i + 1]) {
				largestX = i;
			}
		}
		
		if(largestX === -1) {
			return false;
		}
		
		// Find largest Y
		var largestY = -1;
		for(var j=0; j < arr.length; j++) {
			if(arr[largestX] < arr[j]) {
				largestY = j;
			}
		}
		
		//Swap X and Y and reverse everything after X
		var hold = arr[largestX];
		arr[largestX] = arr[largestY];
		arr[largestY] = hold;
		hold = arr.splice(largestX + 1);
		hold.reverse();
		arr = arr.concat(hold);
		
		return arr;
		
	}
	
}
	
	
//Problem 25

function findFirstFibLength (fibLength) {
	var fibArr = ['1','1'];
	
	for(let i=2; fibArr[i - 1].length < fibLength; i++) {
		fibArr[i] = largeNumAdder(fibArr[i - 1], fibArr[i - 2]);
	}
	return fibArr;
	
	function largeNumAdder(val1, val2) {
	
		num1 = val1.toString().padStart(val2.length, '0').split('');
		num2 = val2.toString().padStart(val1.length, '0').split('');

		var resultArr = [];
		var carry = 0;

		for(let i=1; i <= num1.length; i++) {

			resultArr[num1.length - i] = ((Number(num1[num1.length -  i]) + Number(num2[num2.length - i]) + carry) % 10).toString();

			if((Number(num1[num1.length -  i]) + Number(num2[num2.length - i])) + carry >= 10) {
				carry = 1;
			} else {
				carry = 0;
			}
		}
		
		if(carry === 1) {
			resultArr.unshift('1');
		}
		return resultArr.join('');
	}

}


//Fun multiplier


function largeNumMulitpled(a, b) {

	num = a.toString();

	var resultArr = [];
	var carry = 0;
	var currentValue = num;

	for(let i=1; i < b; i++) {
		currentValue = largeNumAdder(currentValue, num);
	}
	
	function largeNumAdder(val1, val2) {
	
		num1 = val1.toString().padStart(val2.length, '0').split('');
		num2 = val2.toString().padStart(val1.length, '0').split('');

		var resultArr = [];
		var carry = 0;

		for(let i=1; i <= num1.length; i++) {

			resultArr[num1.length - i] = ((Number(num1[num1.length -  i]) + Number(num2[num2.length - i]) + carry) % 10).toString();

			if((Number(num1[num1.length -  i]) + Number(num2[num2.length - i])) + carry >= 10) {
				carry = 1;
			} else {
				carry = 0;
			}
		}
		
		if(carry === 1) {
			resultArr.unshift('1');
		}
		return resultArr.join('');
	}
	
	return currentValue;
}


function longestRecurringPattern(denominator) {
	var longestPattern = '';
	
	for(let i=2; i <= denominator; i++) {
		var decimal = largeDecimalAnswer(i);
		var patternRepeat = decimal.match(/(\S{4,}?)\1\S*/);
		if(patternRepeat === null) {
			continue;
		} else {
			if(patternRepeat[1].length >= longestPattern.length) {
				longestPattern = patternRepeat[1];
				console.log('newest pattern: ',i,longestPattern);
			}
		}
	}
	
	function largeDecimalAnswer(denom) {
		var answer = [];
		var remainder = '1';
		for(let i=0; i< 5000; i++) {
			remainder += '0';
			if((Number(remainder) / denom) < 1) {
				answer[i] = '0';
				continue;
			} else {
				answer[i] = (Math.floor(Number(remainder) / denom)).toString();
				remainder = (Number(remainder) % denom).toString();
			}
		}
		return answer.join('');
	}
	
	return longestPattern;
}














