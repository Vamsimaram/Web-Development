const mongoose=require("mongoose");
main()
    .then(()=>{
        console.log("conection success");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//schema creation
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

//model creation
const User=mongoose.model("User",userSchema);

// //inserting one
// const user1=new User({
//     name:"mvk",
//     email:"mvk@gmail.com",
//     age:20
// })

// //to save in db and save fn returns promise, so we can use then and catch
// user1.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log(err);
//     })

// //inserting many
// User.insertMany([
//     {name:"prem",email:"prem@gmail.com",age:25},
//     {name:"sriraj",email:"rajj@gmail.com",age:29},
//     {name:"dinesh",email:"reddy@gmail.com",age:22}
// ]).then(res=>{
//     console.log(res);
// })

//find
//User.find({}).then(res=>console.log(res));  //finds all data
//User.find({age:{$gt:25}}).then(res=>{console.log(res)}); //finds one particular data
//User.findById("666cddc547079bad8646280a").then(res=>{console.log(res)});  //find data by id

//update
//User.updateOne({name:"sriraj"},{age:31}).then(res=>console.log(res));   //updates only one but not returns updated data
//User.updateMany({age:{$lt:25}},{age:20}).then(res=>console.log(res));

//to get updated data, we use findOneAndUpdate and also use optn new=true
//User.findOneAndUpdate({name:"sriraj"},{age:45},{new:true}).then(res=>console.log(res));
User.findByIdAndUpdate("666cddc547079bad8646280b",{email:"dinu@gmail.com"},{new:true}).then(res=>console.log(res));