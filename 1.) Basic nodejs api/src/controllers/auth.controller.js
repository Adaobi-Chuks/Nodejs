import UserService from "../services/user.service.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {

    async signUp(req, res) {
        const userData = req.body;

        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(userData.password, salt);

        const newUser = await UserService.create({
            email: userData.email,
            password: encryptedPassword
        });

        const token = jwt.sign({
            _id: newUser._id,
            email: newUser.email
        },
            "secret",
            { expiresIn: 3 * 24 * 60 * 60 }
        );

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

        return res.status(201).send({
            success: true,
            message: "User successfully signed up",
            newUser
        })
    }

    async login(req, res) {
        const userData = req.body;

        const user = await UserService.findOne({
            email: userData.email
        })

        const isValidPassword = await bcrypt.compare(userData.password, user.password);

        if (!isValidPassword) {
            return res.status(400).send({
                success: false,
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({
            _id: user._id,
            email: user.email
        },
            "secret",
            { expiresIn: 3 * 24 * 60 * 60 }
        );

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

        return res.status(200).send({
            success: true,
            message: "User successfully logged in",
            user
        })
    }
}

export default new AuthController();