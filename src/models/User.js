import { Schema, model} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: {
    type: String,
    required: true,
    unique: true, // This is not a validator, it's index
    match: /\@[a-zA-Z]+.[a-zA-Z]+$/,
    minLength: 10,
    },
    password: {
    type: String,
    match: /^\w+$/,
    minLength: [6, 'Password should be at least 6 charecters!'],
    trim: true, // Sanitizer
    },
});

userSchema.virtual('rePassword')
.set(function(rePassword) {
    if (rePassword !== this.password) {
        throw new Error('Password missmatch!');
    }
});

userSchema.pre("save", async function () {
    
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;