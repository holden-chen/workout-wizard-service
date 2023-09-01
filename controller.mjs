import express from 'express';
import { exercise as Exercise } from './model.mjs';

const app = express();
const PORT = 3000;

// include express.json middlware
app.use(express.json());
// -----------------------------------

// MIDDLEWARE FUNCTION
async function getExercise(req, res, next) {
    let exercise 
    try {
        exercise = await Exercise.findById(req.params._id);
        if (exercise === null ) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.exercise = exercise
    next();
}


// -----------------------------------
// CRUD OPERATIONS:
// CREATE
app.post('/exercises', async (req, res) => {
    const exercise = new Exercise({
        name: req.body.name,
        reps: req.body.reps,
        weight: req.body.weight,
        unit: req.body.unit,
        date: req.body.date
    });

    try {
        const newExercise = await exercise.save();
        res.status(201).json(newExercise);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// -----------------------------------
// READ
app.get('/exercises', async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// -----------------------------------
// UPDATE
app.put('/exercises/:_id', getExercise, async (req, res) => {
    if (req.body.name !== res.exercise.name) {
        res.exercise.name = req.body.name
    } 
    if (req.body.reps !== res.exercise.reps) {
        res.exercise.reps = req.body.reps
    } 
    if (req.body.weight !== res.exercise.weight) {
        res.exercise.weight = req.body.weight
    } 
    if (req.body.unit !== res.exercise.unit) {
        res.exercise.unit = req.body.unit
    } 
    if (req.body.date !== res.exercise.date) {
        res.exercise.date = req.body.date
    } 
    try {
        const updatedExercise = await res.exercise.save();
        res.status(200).json(updatedExercise);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// -----------------------------------
// DELETE
app.delete('/exercises/:_id', getExercise, async (req, res) => {
    try {
        await res.exercise.remove();
        res.status(204).json({ message: 'Deleted exercise' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// -----------------------------------
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
