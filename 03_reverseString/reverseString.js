const reverseString = function(word) {
    let abc=[];
    for (let i = 0; i < word.length; i++) {
        abc.push(word[i]);
        
    }
    let abcI=[];
    for (let i = abc.length-1; i >= 0; i--) {
        abcI.push(abc[i]);
    }
    let wordI="";
    for (let i = 0; i < abcI.length; i++) {
        wordI += abcI[i];
    }
    return wordI;
};

// Do not edit below this line
module.exports = reverseString;
