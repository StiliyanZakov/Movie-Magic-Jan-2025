import { Schema, Types, model } from 'mongoose';

// Create a schema
const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is requred!'],
        minLength: [5, 'Title should be at least 5 characters long!'],
        maxLength: 50,
        match: [/^[a-zA-Z 0-9]+$/, 'Title should be alphanumeric, degits and whitespaces only!']
    },
    category: String,
    genre: {
        type: String,
        required: [true, 'Genre is requred!'],
        minLength: [5, 'Genre should be at least 5 characters long!'],
        maxLength: 50,
        match: [/^[a-zA-Z 0-9]+$/, 'Genre should be alphanumeric, degits and whitespaces only!']
    },
    director: {
        type: String,
         minLength: [5, 'Director should be at least 5 characters long!'],
        maxLength: 50,
        match: [/^[a-zA-Z 0-9]+$/, 'Director should be alphanumeric, degits and whitespaces only!']
    },
    year: {
        type: Number,
        min: 1900,
        max: 2025
    },
    imageUrl: {
        type: String,
        match: /^https?:\/\//,
    },
    rating: {
    type: Number,
    min: 1,
    max:5
    },
    description: {
        type: String,
        minLength: 20,
        match: /^[a-zA-Z 0-9]+$/,
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }], 
     creator: {
        type: Types.ObjectId,
        ref: 'User'
     }   
});

// Create a model
const Movie = model('Movie', movieSchema);

// Export the model
export default Movie;