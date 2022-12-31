const express=require('express');
const router = express.Router();
const {GetAllnotes, Createnote, Getnote, Updatenote, Deletenote} = require('../controllers/notes.js');
router.route('/').get(GetAllnotes).post(Createnote);
router.route('/:id').get(Getnote).patch(Updatenote).delete(Deletenote);

module.exports = router;