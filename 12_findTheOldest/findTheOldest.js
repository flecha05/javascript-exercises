const findTheOldest = function(array) {
    const birth= array.map((person) => person.yearOfBirth);
    const death= array.map((person) => person.yearOfDeath);
    for (let i = 0; i < array.length; i++) {
        if(death[i]==undefined){
            death[i]=(new Date()).getFullYear();
        }
    }
    let oldest=0;
    let index=0;
    for (let i = 0; i < array.length; i++) {
        let a=death[i]-birth[i]
        if(a>oldest){
            oldest=a;
            index=i;
        }
    }
    return array[index]
};

// Do not edit below this line
module.exports = findTheOldest;
