const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let custSchema = new Schema({
    custId: Number,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    address: String

});

module.exports = function(connectionString){
    let Customer;

    return{
        initialize: function(){
            return new Promise((resolve, reject)=>{
                let db =mongoose.createConnection(connectionString,{useNewUrlParser: true, useUnifiedTopology: true});
                db.on('error', ()=>{
                    reject();
                });
                db.once('open', ()=>{
                    Customer = db.model("customer", custSchema);
                });
            });
        },
        addNewCustomer: function(data){
            return new Promise((resolve, reject)=>{
                let newCust = new Customer(data);
                newCust.save((err)=>{
                    if(err){
                        reject(err);
                    
                    }else{
                        resolve(`new customer: ${newCust.firstName} successfully added`);
                    }
                });
            });
        }
    }
}