import User from "../models/user.js";

// Handel user profile
export const userlist = async (req, res) => {
    const userID = req.user;

    const user = await User.find();

    res.status(200).json(user);
};
