const sumAll = function(a,b) {
    let sum=0;
    let i=a;
    let n=b;
    if (typeof(a)!=typeof(b) || a<0 || b<0) {
        return 'ERROR'
    }else{
        if (a>b) {
            i=b;
            n=a;
        }
        for(i;i<=n;i++){
            sum=sum+i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
