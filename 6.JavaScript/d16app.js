let n="Vamsi "

console.log(n.trim(1,3)) //trimming
console.log(n.toUpperCase()) //to upper case
console.log(n.toLowerCase())

console.log(n.indexOf("s")) //index of elmnt

console.log(n.slice(1,4)) //slicing

console.log(n.replace("Vamsi","krishna")) //replace

console.log(n.repeat(3)) //repeat n times

//Arrays

let arr=["mvk","abc","xyz"];
console.log(arr)

console.log(arr.length);  //length of arr

console.log(arr[1]) //abc

console.log(arr[0][0]) //m

arr[4]="pqr";
console.log(arr) //mvk,abc,xyz,pqr

arr.pop() //del last elmt
arr.push("ending") //add at last
arr.shift() //del at starting elmt
arr.unshift("starting") //add at starting elmt
console.log(arr)

let dup=[1,2,3]
console.log(arr.concat(dup))

console.log(dup.reverse())

console.log(arr.slice(2)) //slice means copy of orig arr, no change occur in main arr

dup.splice(2);//splice means to delete and add elmts and changes occur in main arr
console.log(dup)
console.log(dup.splice(0,1,))

console.log([1]==[1]) //false

let cpy=arr; //here both cpy and arr elmts are stored in same address
cpy.push(18) //when we make changes in cpy, then arr also changes
console.log(arr)
console.log(arr===cpy) //true

const a=[1,2,3]
a.push(5)
console.log(a) //can do this
a.pop()
console.log(a) //crct
(a.pop()) //error
console.log(a)