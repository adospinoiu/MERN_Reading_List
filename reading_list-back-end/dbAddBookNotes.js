import mongoose from 'mongoose';

const addBookNotesSchema = mongoose.Schema({
    _id: String,
    notes: String,
})

export default mongoose.model('addBookNotes', addBookNotesSchema)