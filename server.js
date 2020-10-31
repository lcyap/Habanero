/**
 * Contains API for fetching Customer Schema and Order Schema
 */

 const express = require("express");
 const cors = require("cors");
 const bodyparser = require("body-parser");


 //declare other js
 const db = dataService("mongodb+srv://admin:garlichabanero@gh.c1o92.mongodb.net/GHSytem?retryWrites=true&w=majority");
 //declare mongoDB URL

const app = expres();
 ////////

 app.use(cors());
 app.use(bodyParser.json());
 const HTTP_PORT = process.env.PORT || 8080;

 //API ROUTES
////Customer Info Schema
// ADD
app.post("/api/addcustomer", (req,res)=>{
    db.addNewSale(req.body).then((data)=>{
        res.json({message: "Successfully added a cutomer"});
        console.log(data);
    }).catch((error)=>{
        res.status(400).json(error);
    })
})


/**Initializing the Service and start browser */
db.initialize().then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    }); 
}).catch((err)=>{
    console.log(err);
})