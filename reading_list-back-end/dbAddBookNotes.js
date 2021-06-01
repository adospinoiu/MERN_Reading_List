import mongoose from 'mongoose';

const addBookNotesSchema = mongoose.Schema({
    title: String,
    notes: String,
})

export default mongoose.model('addBookNotes', addBookNotesSchema)