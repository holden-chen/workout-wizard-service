import mongoose from 'mongoose';

// ----------------------------------------------------------

// Define the schema
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }  // MM-DD-YY format
});

const exercise = mongoose.model("Exercise", exerciseSchema);

export { exercise, exerciseSchema };
