import mongoose from 'mongoose';

const addFinishedReadingSchema = mongoose.Schema({
    _id: String,
    title: String,
    author: String,
    recommendedBy: String,
    notes: String,
})

export default mongoose.model('addFinishedReading', addFinishedReadingSchema)