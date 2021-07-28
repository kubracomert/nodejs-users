const { response } = require("express");
const express = require("express");
const router = express.Router()
const conn=require("../app")
const User = require("../models/Post");

const EmailValidator = require('email-deep-validator');
// const emailValidator = require('deep-email-validator');

const { json } = require("body-parser");

const emailValidator = new EmailValidator();

router.get("/", function (req, res) {
    User.find({}).then(user => {
        console.log(user);
        res.send(user)
    })
})

router.post("/", async function (req, res) { 
    
    const { wellFormed, validDomain } = await emailValidator.verify(req.body.email);
    console.log({ wellFormed, validDomain });
    if (wellFormed && validDomain) {

        var user = new User({
            name: req.body.name,
            email: req.body.email
        });

        await user.save((err, data) => {
            if (data) {
                res.send({message:'Your data has been successfully saved.'});
                // res.json(data);
            }
            else {
                // console.log('Something went wrong while saving data.');
                // console.log(err);
                res.send({message:'Something went wrong while saving data.'+err});
            } 
        }) 
    }
    else
        return res.status(400).send({
            message: "Please provide a valid email address.", 
        })

})

module.exports = router;