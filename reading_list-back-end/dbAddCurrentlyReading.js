import mongoose from 'mongoose';

const addCurrentlyReadingSchema = mongoose.Schema({
    title: String,
    author: String,
    recommendedBy: String,
    notes: String,
})

export default mongoose.model('addCurrentlyReading', addCurrentlyReadingSchema)