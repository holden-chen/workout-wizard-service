import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.mjs';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

// include express.json middlware
app.use(express.json());
app.use('/api', routes);

// Connect to MongoDB
const atlasURI = process.env.MONGO_URL;
mongoose.connect(atlasURI);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

// -----------------------------------

// -----------------------------------
app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on port ${port}...`);
});