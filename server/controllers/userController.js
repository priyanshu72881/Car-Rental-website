import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// 🔥 Generate JWT Token
const generateToken = (userid) => {
    return jwt.sign({ id: userid }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
}

// ================= REGISTER =================
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password || password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Fill all fields properly ❌"
            })
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists ❌"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        const token = generateToken(user._id)

        res.status(201).json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Server error ❌"
        })
    }
}

// ================= LOGIN =================
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found ❌"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials ❌"
            })
        }

        const token = generateToken(user._id)

        res.status(200).json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Server error ❌"
        })
    }
}

// ================= GET USER DATA =================
export const getUserData = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Server error ❌"
        })
    }
}