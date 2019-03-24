function map(callback, arr) {
	var newArray = [];
    for(i=0; i<arr.length; i++) {
		var x = arr[i];
		newArray.push(callback(x));
    }
	return newArray;
}



// Example of a RegExp
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


function findOdd(A) {
  answer = 0;
  var obj = A.reduce(function(tally, number) {
    tally[number] = (tally[number] || 0) + 1;
    return tally;
  }, {});
  for(var key in obj) {
	  if(obj[key] % 2 !== 0) {
		  return Number(key);
	  }
  }
}



function disemvowel(str) {
  return str.split('').filter(e => 
       e !== 'a'
    && e !== 'e'
    && e !== 'i'
    && e !== 'o'
    && e !== 'u'
    && e !== 'A'
    && e !== 'E'
    && e !== 'I'
    && e !== 'O'
    && e !== 'U').join('');
}

disemvowel = str => str.replace(/[aeiou]/gi,'');


findEmailRegex = [\w._]+@\w+\.[a-z]{3}\b

findPhoneNumber = \(?\d{3}[-.)]\s?\d{3}[.-]\d{4}


//morse Code problem
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}


//Sort string of words with numbers in them
function order(words) {
  
  return words.split(' ').sort(function(a, b) {
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 



//sum of digits down to one number
function digital_root(n) {
  return (n - 1) % 9 + 1;
}


function digital_root(n) {
  var arr = n.toString().split('');
  while(arr.length > 1) {
    var answer = arr.reduce((a, c) => a + Number(c), 0);
    if(answer.toString().length === 1) {
      return answer;
    }
    arr = answer.toString().split('');
  }
  return n;
}


function humanReadable(seconds) {
	var pad = x => (x < 10) ? '0'+x : x;
  return `${pad(parseInt(seconds/3600))}:${pad(parseInt(seconds/60 % 60))}:${pad(seconds % 60)}`
}




							 
//Best practice vs. mine							 
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}





console.time('regex');

str = 'When I first brought my cat home from the humane society she was a mangy, pitiful animal. It cost a lot to adopt her: forty dollars. And then I had to buy litter, a litterbox, food, and dishes for her to eat out of. Two days after she came home with me she got taken to the pound by the animal warden. There\'s a leash law for cats in Fort Collins. If they\'re not in your yard they have to be on a leash. Anyway, my cat is my best friend. I\'m glad I got her. She sleeps under the covers with me when it\'s cold. Sometimes she meows a lot in the middle of the night and wakes me up, though. '

function startsWithEndswith(str, starts, ends) {
		var regex = new RegExp('\\b' + starts +'\\w+' + ends + '\\b', 'gi');
		return str.match(regex);
}

console.log(startsWithEndswith(str, 's', 'y'));

console.timeEnd('regex');




var uniqueInOrder=function(iterable){
  var int = false;
  if(Array.isArray(iterable)) {
    iterable = iterable.join('');
    if(iterable[0] === "number") {
      int = true;
  	}
	}
  var arr = iterable.replace(/(\w)\1+/g, '$1').split('');
  if(int) {
    return arr.map(e => Number(e));
  }
  return arr;
}




function findAllItemsByParameter(arr, param) {
  var arr = [];
  arr.forEach(function(designer) {
    designer.shoes.forEach(function(shoe) {
      if(shoe.name.includes(param)) {
        arr.push({
          nameWords : shoe.name.split(' '),
          targetWordIndex : indexOfWord(shoe.name.split(' '), param)
        });
      }
    });
  });
  return arr;
}


function add(a, b) {
  var answerArr = [];
  var arrA = a.split('');
  var arrB = b.split('');
	while(arrA.length > arrB.length) {
		arrB.unshift('0');
	}
	while(arrB.length > arrA.length) {
		arrA.unshift('0');
	}
  var carry = 0;
  for(let i=1; i<= arrA.length; i++) {
    var digitValue = 0;
    digitValue += Number(arrA[arrA.length -i]) + Number(arrB[arrB.length -i]) + carry;
    carry = 0;
    if(digitValue > 9) {
      carry += 1;
      answerArr.push((digitValue-10).toString());
    } else {
      answerArr.push(digitValue.toString());
		}
  }
	if(carry > 0) {
		answerArr.push('1');
	}
	return (answerArr.reverse().join(''));
}


var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);


function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    var encodedStr = '';
		for(let i=0; i< str.length; i++) {
      if(abc.indexOf(str[i]) === -1) {
        encodedStr += str[i];
      } else {
			var shiftCode = abc.indexOf(key[i % key.length]);
			var charCode = abc.indexOf(str[i]);
			encodedStr += abc.charAt((charCode + shiftCode) % abc.length);
      }
		}
		return encodedStr;
  };
  this.decode = function (str) {
    var decodedStr = '';
		for(let i=0; i< str.length; i++) {
      if(abc.indexOf(str[i]) === -1) {
        decodedStr += str[i];
      } else {
			var shiftCode = abc.indexOf(key[i % key.length]);
			var charCode = abc.indexOf(str[i]);
			decodedStr += abc.charAt((abc.length + (charCode - shiftCode)) % abc.length);
      }
		}
		return decodedStr;
  };
}





var Sudoku = function(data) 
{
  var validateStructure = function(data) {
    var width = data.length;
    if(!Number.isInteger(Math.sqrt(width))) {
      return false;
    }
    for(i=0; i<width;i++){
      if(width !== data[i].length) {
        return false;
      }
    }
    return true;
  }

  var validateRows = function(data) {
    var width = data.length;
		var isValid = true;
    data.forEach(function(row) {
      for(i=1; i<=row.length;i++){
        if(!row.includes(i)) {
					console.log(i);
          isValid = false;
        }
      }
    });
    return isValid;
  }
	
	var validateColumns = function(data) {
		var width = data.length;
		var sumCheck = 0;
		for(let i = width; i > 0; i--) {
			sumCheck += i;
		}
		for(let i=0; i < width; i++) {
			var columnSum = 0;
			for(let j=0; j <width;j++) {
				columnSum += data[j][i];
			}
			if(columnSum !== sumCheck) {
				return false;
			}
		}
		return true;
	}
	
	var validateLittleBoxes = function(data) {
		var width = data.length;
		var widthSqrt = Math.sqrt(width);
		var sumCheck = 0;
		for(let i = width; i > 0; i--) {
			sumCheck += i;
		}
		
		for(let l=0; l < width; l+=widthSqrt) {
			for(let j=0; j< width; j+=widthSqrt) {
					var count = 0;
				for(let k=0; k< widthSqrt; k++) {
					count += data[k+j].slice((l),(l+widthSqrt)).reduce((a,b) => a + b);
				}
			if(sumCheck !== count) {
				return false;
			}
				
			}
		}
		return true;
	}

  //   Public methods
  // -------------------------
  return {
    isValid: function() {

      return (validateStructure(data) && 
              validateRows(data)  &&
							validateColumns(data) &&
						 	validateLittleBoxes(data));
    }
  };
};








