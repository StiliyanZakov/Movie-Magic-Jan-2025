import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: String,
    age: Number,
    born: String,
    imageUrl: String, // Changed from ImageUrl to imageUrl
});

const Cast = model("Cast", castSchema);

export default Cast;

