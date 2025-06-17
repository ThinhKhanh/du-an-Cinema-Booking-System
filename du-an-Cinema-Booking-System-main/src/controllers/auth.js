import User from "../models/auth";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export const sigup = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({name, email, password:hashedPassword});
         return res.status(201).json({message: "Đăng ký thành công", user})
    } catch (error) {
        res.status(400).json({ message: "Error registering user" });
    }
};

export const signin = async (req,res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).select("+password");
        if(!user) {
            return res.status(400).json({ message: "Tài khoản không tồn tại" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: "Sai mật khẩu" });
        }

        const token = jwt.sign({id: user._id}, "123456", {expiresIn:"10m"});
        user.password = undefined;
        res.status(200).json({token, data: user})
    } catch (error) {
        res.status(400).json({message: "Đăng ký tài khoản thất bại", error: error.message})
    }
};