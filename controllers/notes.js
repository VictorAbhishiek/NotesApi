const note = require('../models/notes');
const { options } = require('../routes/notes');
const GetAllnotes = async (req,res)=>{
    try {
        const notes =  await note.find({});
        res.json({notes})
    } catch (error) {
        res.json({'message':error})
    }
}
const Createnote = async (req,res)=>{
    try {
        const note = await note.create(req.body);
        res.json({note})
    } catch (error) {
        res.json({'message':error})
    }
}
const Getnote = async (req,res)=>{
    try {
        const noteID =req.params.id
        console.log(noteID)
        const note = await note.findOne({_id:noteID})
        if(!note){
            return res.json({message:`Not exists wit id:${noteID}`,name:`tarun`})
        }
        res.json({note})
    } catch (error) {
        res.json({'message':error})
    }
}
const Updatenote = async (req,res)=>{
    try {
        const noteID =req.params.id
        console.log(noteID)
        const note = await note.findOneAndUpdate({_id:noteID},req.body,{
            new:true,
            runValidators:true
        })
        if(!note){
            return res.json({message:`Not exists wit id:${noteID}`,name:`tarun`})
        }
        res.json({note})
    } catch (error) {
        res.json({'message':error})
    }
}
const Deletenote =async (req,res)=>{
    try {
        const noteID =req.params.id
        console.log(noteID)
        const note = await note.findOneAndDelete({_id:noteID})
        if(!note){
            return res.json({message:`Not exists wit id:${noteID}`,name:`tarun`})
        }
        res.json({note})
    } catch (error) {
        res.json({'message':error})
    }
}


module.exports = {GetAllnotes, Createnote, Getnote, Updatenote, Deletenote};