import { Schema, Types, model } from 'mongoose';

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
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }], 
        
});

// Create a model
const Movie = model('Movie', movieSchema);

// Export the model
export default Movie;