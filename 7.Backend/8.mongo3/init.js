const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
    .then(()=>{
        console.log("connection succesful");
    })
    .catch(err=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats=[
    {
    from:"vamsi",
    to:"jarirs",
    msg:"send me notes for exam",
    created_at:new Date()
    },
    {
        from:"dinesh",
        to:"gp",
        msg:"prepare for quiz",
        created_at:new Date()
    },
    {
        from:"sriraj",
        to:"prem",
        msg:"where are you",
        created_at:new Date()
    },
    {
        from:"kumar",
        to:"reddy",
        msg:"come to the home quickly",
        created_at:new Date()
        }
]

Chat.insertMany(allChats);