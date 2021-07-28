const mongoose = require('mongoose');

const test=require("./models/Post");


mongoose.connect("mongodb://127.0.0.1/users",{
	useNewUrlParser:true,
	useUnifiedTopology:true
})

//create
// test.create({
//     name:"First test name",
//     email:"First test email"
// },(err,post)=>{
//     console.log(err,post);
// })

//update
//bu sadece id ye göre bulur.

// test.findById("60ffa9cc2266a480f712eb07",(err,post)=>{
//     console.log(err,post);
// });

// test.findByIdAndUpdate("60ffa9cc2266a480f712eb07",{
//     name:"first update test name"
// },(err,post)=>{
//     console.log(err,post);
// });


//delete
// test.findByIdAndDelete("60ffa9cc2266a480f712eb07",(err,post)=>{
//     console.log(err,post);
// })

