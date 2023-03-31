const Users = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.getAll = async (req, res) => {
    const result = await Users.find({});

    if (result) {
        res.status(200).send({
            status: true,
            result
        });
        return
    } else {
        res.status(500).send({
            status: false,
            message: "Users not found"
        });
    } return
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;

    const result = await Users.find({ _id });

    if (result) {
        res.status(200).send({
            status: true,
            result
        });
        return
    } else {
        res.status(500).send({
            status: false,
            message: "User not found"
        });
    } return
}

exports.register = async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;

    if (!email || !password) {
        res
            .status(500)
            .send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    }

    const hashedPass = await bcrypt.hash(password, 8);
    if (hashedPass) {
        const newUser = new Users({
            firstName,
            lastName,
            userName,
            email,
            password: hashedPass,

        });

        const result = await newUser.save();

        if (result) {
            res.status(200).send({
                status: true,
                message: "Amjilttai hadgalalgdlaa",
            });
            return;
        } else {
            res.status(500).send({
                status: false,
                message: "Hadgalahad aldaa garlaa",
            });
            return;
        }
    } else {
        res.status(500).send({
            status: false,
            message: "Password amjilttai encrypt hiigeegui bna",
        });
        return;
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res
            .status(500)
            .send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    }

    const user = await Users.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET_KEY, { expiresIn: "2h" });

        res
            .status(200)
            .send({ status: true, data: user, message: "Success", token });

        return;
    } else {
        res.status(400).send({
            status: false,
            message: "user oldsongui ee, nuuts ug taarahgui bna",
        });
        return;
    }
};

exports.updateUser = async (req, res) => {
    const { _id } = req.params
    try {
        const result = await Users.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: false, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
}

exports.deleteUser = async (req, res) => {
    const { _id } = req.params
    try {
        const result = await Users.findByIdAndDelete({ _id });
        res.json({ status: false, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
}