
//qn1
// let nums=[1,2,3,4,5];
// const square=nums.map((num)=>num*num)
// console.log(square);
// let su=square.reduce((acc,cur)=>acc+cur,0);
// let avg=sum/nums.length;
// console.log(avg);


//qn2
// let nums=[1,2,3,4,5];
// let res=nums.map((el)=>{
//     return el+5;
// });
// console.log(res)

//qn3
let word=["VamSi","Maram"];
let res=word.map((el)=>
    el.toUpperCase()
);
console.log(res)

//qn4
const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];  //doubleAndReturnArgs([1,2],4,5)

//qn5
const mergeObjects=(obj1,obj2)=>(
    {
        ...obj1,...obj2
    }
);  //mergeObjects({a:1,b:2},{c:3,d:4})

