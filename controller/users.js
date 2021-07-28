const express = require("express");
const router = express.Router()
const User = require("../models/Post");

router.get("/:id", function (req, res) {
    User.findById({_id:req.params.id}).then(user=>{
        res.send(user)
    })
})

router.put("/:id", function (req, res) {
    User.findByIdAndUpdate({_id:req.params.id},{
        name:req.body.name,
        email:req.body.email
    },(err,post)=>{
      console.log(err,post);
    }); 
})

router.delete("/:id", function (req, res) { 
    User.remove({
        _id: req.params.id
    }).then(() => {
        console.log("deleted");
    })
})

module.exports = router
















// router.post("/test", function (req, res) {
//     console.log(req.body);
//     userSave.create(req.body);
//     res.end("user save page test PAGe");
// }) 
