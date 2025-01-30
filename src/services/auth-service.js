import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const SECRET = '$4b$10$nlqYlsuRforsE4plC010A.fRrfTrRFWnOX9bjf8C.7ODhHPMq1FOQ';
export default {
    register(userData) {
        return User.create(userData);
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const payload = {
            id: user.id,
            email: user.email,
        };
        const token = jwt.sign(payload, SECRET, { expiresIn: '2h' });

        return token;
    },
};