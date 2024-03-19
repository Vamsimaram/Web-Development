const arrayAverage=(arr)=>{
    let t=0;
    for(let number of arr){
        t+=number;
    }
    return t/arr.length;
};

let arr=[1,2,3,4,5,6,7,8];;
console.log(arrayAverage(arr));