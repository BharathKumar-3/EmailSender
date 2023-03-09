const express = require("express")
const app = new express;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'bharathkumartester14@gmail.com',
		pass: 'rritrliolitnwslv'
	}
});
app.post("/", function(req,res,next){
    console.log(req.body)
    res.send({
        stat : "success"
    });
    let mailDetails = {
        from: 'bharathkumartester14@gmail.com',
        to: "bharathkumarsp.ec20@bitsathy.ac.in,bharathkumar13619@gmail.com",
        subject: req.body.name,
        text: req.body.message
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
    
})

app.listen(8080,()=>{
    console.log("server is running");
})




