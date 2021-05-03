import mongoose from 'mongoose';

const addNewBookSchema = mongoose.Schema({
    title: String,
    author: String,
    recommendedBy: String,
})

export default mongoose.model('addNewBook', addNewBookSchema)