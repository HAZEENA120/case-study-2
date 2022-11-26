const mongoose = require("mongoose")


const schema = mongoose.Schema;

const employee_detail = new schema({
    name: String,
    location: String,
    position: String,
    salary: Number


})

const employeeData = mongoose.model("datas", employee_detail); 
//atlas need prural form

module.exports = employeeData;