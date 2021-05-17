import mongoose from 'mongoose';

const addCurrentlyReadingSchema = mongoose.Schema({
    _id: String,
    title: String,
    author: String,
    recommendedBy: String,
    notes: String,
})

export default mongoose.model('addCurrentlyReading', addCurrentlyReadingSchema)