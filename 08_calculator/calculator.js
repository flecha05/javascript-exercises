const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr=[arr,...args]) {
	return arr.reduce((a,b)=>a+b,0)
};

const multiply = function(arr=[arr,...args]) {
 /* var mlt=1;
  arr.forEach(element => {
    mlt*=element;
  });
  return mlt;*/
  return arr.reduce((a,b)=>a*b);
};

const power = function(a,b) {
  var pow=a;
	for (let i = 1; i < b; i++) {
    pow*=a;
  }
  return pow;
};

const factorial = function(num) {
	if (num<0) {
    return -1;
  }else if( num ==0){
    return 1;
  }else{
    return(num*factorial(num-1));
  }

};
//arr,...args
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
