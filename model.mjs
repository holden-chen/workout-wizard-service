import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.DB_URI,
    {   dbName: "api_workout_wizard",
        user: process.env.DB_USERNAME,
        pass: process.env.DB_PASSWORD,
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

// Connect to to the database
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

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

// ----------------------------------------------------------
// IMPLEMENT CRUD OPERATIONS IN THE MODEL

// CREATE

// READ

// UPDATE

// DELETE

export { exercise, exerciseSchema };
