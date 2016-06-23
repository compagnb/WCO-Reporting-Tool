// Barbara Compagnoni

// script to sort wco reporting data into useful metrics
// items needed to sort:
// Major Code - find in "Patron Department"
// Faculty/Staff/Student - find in "Effective Patron Class"
// Equipment Type - find in "Item Names" or Summary
// Pick Up Time - find in "Pickup Time"
// Return Time - find in "Actual Return Time" or "Effective Return Time"
// Late Return - "Return Time" minus "Actual Return Time" or "Effective Return Time"
// Canceled Reservation - find in State or "Reservation Cancelled:" in Summary collumn
// Student Name - Patron


// included libraries
var fs = require('fs'); 
var csv = require("fast-csv");

// universal vars
var stream = fs.createReadStream("sampleusage.csv");
var csvData = [];

var equipData = [];
var resType = [];


// load csv file
csv
 .fromStream(stream, {headers : true})
 .validate(function(data){
     getEquipment(data)
    //  getMPHTally(data);
    //  return data.Patron == "James L. Ramer"; //all persons must be under the age of 50 
 })
 .on("data-invalid", function(data){
     //do something with invalid row 
 })
 .on("data", function(data){
     console.log(data);
 })
 .on("end", function(){
    //  console.log(equipData);
     console.log("done");
 });
 
 
 

function getMPHTally(data){
    // console.log(data['Patron Department']);
    return data['Patron Department'] = 'MPH'; //all persons must be under the age of 50 
}

function getEquipment(data){
    // equipData.push(data['Item Names'])
    // console.log(data['Item Names']);
    equipData.push(data.Summary);
    
    for (var i = 0; i < equipData.length - 1; i++) {
        resType.push(getResType(equipData[i]));
        getEquType(equipData[i]);
    }
    
    
    
    // console.log(data.Summary);
    
    
}

function pickUpTime(data){
   console.log(data['Pickup Time']);
    
}

function getResType(data){
    var type = data.substring(0, data.indexOf(':'))
    return type;
    // console.log(type);
}

function getEquType(data){
    var whole = data.toString().split(":");
    var restype = whole[0];
    var eqtype = whole[1].toString().split(" | ");
    var eqtypetot = [];
    for (var i = 0; i < eqtype.length - 1; i++) {
        eqtypetot.push(eqtype[i]);
    }
    console.log(restype);
    console.log(eqtype);
}