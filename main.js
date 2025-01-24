var num=[1,2,3,4];

function sum(ar){
    var sum=0;
    for(var i=0;i<ar.length;i++){
       // console.log(ar[i]);
        sum+=ar[i];
    }
    return sum
}

var test=sum(num);
console.log(test);
