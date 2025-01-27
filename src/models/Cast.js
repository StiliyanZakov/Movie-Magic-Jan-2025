import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: String,
    age: Number,
    born: String,
    ImageUrl: String,

});

const Cast = model("Cast", castSchema);

export default Cast;

        