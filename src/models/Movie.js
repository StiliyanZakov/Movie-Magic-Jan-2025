import { Schema, model } from 'mongoose';

// Create a schema
const movieSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String,
});

// Create a model
const Movie = model('Movie', movieSchema);

// Export the model
export default Movie;