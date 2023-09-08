const palindromes = function (string) {
    cstring=string.toLowerCase().replace(/[^a-z0-9]/g,'');

    return  cstring.split('').reverse().join('')==cstring;
};

// Do not edit below this line
module.exports = palindromes;
