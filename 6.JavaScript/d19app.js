let arr=[8,9,19,1,2,3,4,5,6,7];
let num=5;
function fn(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
fn(arr,num);