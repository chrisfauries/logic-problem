
//Basic clousure using nested functions
var count = function(count) {
  return function () {
    return ++count
  }
}

//Using IIFE
var increaser = (function() {
  var closure = 0;
  return function (val) {
    closure += val;
    return closure;
  }
})();




const addTo = function(passed) {
	var d = 5;
  return function add(inner) {
    return passed + inner;
  }
}

let add7 = addTo(7);
let add5 = addTo(5);
let add11 = addTo(11);



console.log(d);
console.log(add11(12));
console.dir(add5);



function arrMultiplier(callback, arr) {
	var newArr = [];
	for(i=0; i<arr.length; i++) {
		var x = arr[i];
		newArr.push(callback(arr[i]));
	}
	return newArr
}

var arrDoubler = arr => arrMultiplier(e => e *2, arr);
var arrTripler = arr => arrMultiplier(e => e *3, arr);


console.dir(arrDoubler)
console.dir(arrTripler)


var arr = [1,2,3,5,7,];

function arrMultiplier2(multiple) {
	return function(arr) {
		var newArr = [];
		for(i=0; i<arr.length; i++) {
			var x = arr[i];
			newArr.push(multiple * x);
		}
		return newArr
	}
}

var arrDoubler2 = arrMultiplier2(2);
var arrTripler2 = arrMultiplier2(3);


console.dir(arrDoubler2)
console.dir(arrTripler2)





function multiplier2 (int) {
	return function(x) {
		return int * x;
	}
}

var doubler2 = multiplier2(2);
var tripler2 = multiplier2(3);


console.dir(doubler2);
console.dir(tripler2);



Object.defineProperty(Array.prototype, 'multiplier', {
	value: function (multiple) {
		var newArr = [];
		for(i=0; i<this.length; i++) {
			var x = this[i];
			newArr.push(multiple * x);
		}
		return newArr;
	}
});


function sum(...nums) {
	sum = 0;
	for ( var num of nums) {
		sum += num;
	}
	return sum;
}






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





var Person = function(name, status) {
	this.name = name;
	this.status = status;
	this.declare = function() {
		console.log(`Hey ${this.name}, You are ${this.status}`)
	};
}

var bergeron = new Person('Michael', 'Coooool');
var fauries = new Person('Chris', 'Amazing!!');








var arr = ['Helsldjhlo','Woasdkjfhlaksjrld'];

function transposeTwoStrings(arr) {
  var longestStringLength = longestString(arr);
  var transposedArr = createConcatLettersArray(arr, longestStringLength);
  var transposedString = buildVertialStringFromArray(transposedArr);
  return transposedString;
}


function longestString(arr) {
  var currentLength = 0;
  for(i=0; i< arr.length; i++) {
    if(arr[i].length > currentLength) {
      currentLength = arr[i].length;
    }
  }
  return currentLength;
}

function createConcatLettersArray (arr, longestString) {
  var newArray = [];
  for(i=0; i < longestString; i++) {
    newArray.push((arr[0][i] || ' ') + ' ' + (arr[1][i] || ' '));
  }
  return newArray;
}

function buildVertialStringFromArray(arr) {
  var str = '';
  for(i=0; i < arr.length; i++) {
    str += `${arr[i]}\n`
  }
  return str;
}

console.log(transposeTwoStrings(arr));







var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var expected22 = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};




var array = [1, 3, 16, 22, 31, 33, 34]

function search(array, value) {
  var currentMidpointIndex = Math.floor(array.length /2);
  for(i=0; i < array.length; i++) {
    if(value === array[currentMidpointIndex]) {
      return (value === array[currentMidpointIndex]);
		
    } else if (value > array[currentMidpointIndex]) {
      currentMidpointIndex = Math.floor((currentMidpointIndex + array.length) /2);
		
    }else if(value < array[currentMidpointIndex]) {
      currentMidpointIndex = Math.floor(currentMidpointIndex /2);
    }
  }
  return (value === array[currentMidpointIndex]);
}

console.log(search(array, 31));


var input = "a short example";

function flipEveryNChars(string, n){
  var array = string.split("");
  var smallString = "";
  var sentence = "";
  for (i = 0; i < array.length; i+=n){
    smallString = array.slice(i, i + n);
    sentence += smallString.reverse().join("");
  }
  return sentence;
}

console.log(flipEveryNChars(input,5));

