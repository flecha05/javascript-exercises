const palindromes = function (string) {
    string=string.toLowerCase().trim().replace(/[^a-z]/g,'');

    var reverse= string.split(' ').reverse().join(' ');
    return reverse===string;
};

// Do not edit below this line
module.exports = palindromes;
