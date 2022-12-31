const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength : [20,'len must be less tan 20 carecters']
    }, 
    description:{
        type:String,
        maxlength : [200,'len must be less than 200 carecters'],
        default:""
    },
});

module.exports = mongoose.model('note',noteSchema);