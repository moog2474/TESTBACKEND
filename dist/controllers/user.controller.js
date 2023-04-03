"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getOne = exports.register = exports.login = exports.updateUser = exports.deleteUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uri = process.env.TOKEN_SECRET_KEY || "";
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.find({});
    if (result) {
        res.status(200).send({
            status: true,
            result,
        });
        return;
    }
    else {
        res.status(500).send({
            status: false,
            message: "Users not found",
        });
    }
    return;
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.query;
    const result = yield user_model_1.default.find({ _id });
    if (result) {
        res.status(200).send({
            status: true,
            result,
        });
        return;
    }
    else {
        res.status(500).send({
            status: false,
            message: "User not found",
        });
    }
    return;
});
exports.getOne = getOne;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, email, password } = req.body;
    if (!email || !password) {
        res
            .status(500)
            .send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    }
    const hashedPass = yield bcrypt_1.default.hash(password, 8);
    if (hashedPass) {
        const newUser = new user_model_1.default({
            firstName,
            lastName,
            userName,
            email,
            password: hashedPass,
        });
        const result = yield newUser.save();
        if (result) {
            res.status(200).send({
                status: true,
                message: "Amjilttai hadgalalgdlaa",
            });
            return;
        }
        else {
            res.status(500).send({
                status: false,
                message: "Hadgalahad aldaa garlaa",
            });
            return;
        }
    }
    else {
        res.status(500).send({
            status: false,
            message: "Password amjilttai encrypt hiigeegui bna",
        });
        return;
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res
            .status(500)
            .send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    }
    const user = yield user_model_1.default.findOne({ email });
    if (user && (yield bcrypt_1.default.compare(password, user.password))) {
        const token = jsonwebtoken_1.default.sign({ user: user }, uri, {
            expiresIn: "2h",
        });
        res
            .status(200)
            .send({ status: true, data: user, message: "Success", token });
        return;
    }
    else {
        res.status(400).send({
            status: false,
            message: "user oldsongui ee, nuuts ug taarahgui bna",
        });
        return;
    }
});
exports.login = login;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.query;
    try {
        const result = yield user_model_1.default.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: false, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.query;
    try {
        const result = yield user_model_1.default.findByIdAndDelete({ _id });
        res.json({ status: false, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteUser = deleteUser;
