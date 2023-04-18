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
exports.getTopUsers = exports.getAll = exports.getOne = exports.register = exports.login = exports.updateUser = exports.deleteUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uri = process.env.TOKEN_SECRET_KEY || "";
const getTopUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.aggregate([{ $unwind: '$point' }, { $group: { _id: { username: '$userName', img: '$img', comment: '$comment' }, points: { $sum: '$point' } } }]).sort({ points: -1 }).limit(10);
    try {
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, result });
    }
});
exports.getTopUsers = getTopUsers;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.find();
    if (result) {
        res.json({ status: true, result });
        return;
    }
    else {
        res.json({ status: false, message: "Users not found" });
    }
    return;
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const result = yield user_model_1.default.findById(id);
    if (result) {
        res.json({ status: true, result });
        return;
    }
    else {
        res.json({ status: false, message: "User not found" });
    }
    return;
});
exports.getOne = getOne;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, userName, email, phone, password, point, userType, img } = req.body;
    if (!email || !password) {
        res.json({ status: false, message: "Medeellee buren oruulna uu" });
        return;
    }
    const hashedPass = yield bcrypt_1.default.hash(password, 8);
    if (hashedPass) {
        const newUser = new user_model_1.default({
            name,
            userName,
            email,
            phone,
            password: hashedPass,
            point,
            userType,
            img
        });
        const result = yield newUser.save();
        if (result) {
            res.json({ status: true, message: "Amjilttai hadgalagdlaa" });
            return;
        }
        else {
            res.json({ status: false, message: "Hadgalahad aldaa garlaa" });
            return;
        }
    }
    else {
        res.json({
            status: false,
            message: "Password amjilttai encrypt hiigeegui baina",
        });
        return;
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.json({ status: false, message: "Medeellee buren oruulna uu" });
        return;
    }
    const user = yield user_model_1.default.findOne({ email });
    if (user && (yield bcrypt_1.default.compare(password, user.password))) {
        const token = jsonwebtoken_1.default.sign({ user: user }, uri, {
            expiresIn: "2h",
        });
        res.json({ status: true, data: user, message: "Success", token });
        return;
    }
    else {
        res.json({ status: false, message: "email or password wrong" });
        return;
    }
});
exports.login = login;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield user_model_1.default.findById(id);
        if (checkId) {
            const result = yield user_model_1.default.findByIdAndUpdate(id, req.body);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "User not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateUser = updateUser;
// update huuchin huvilbaraa butsana
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield user_model_1.default.findById(id);
        if (checkId) {
            const result = yield user_model_1.default.findByIdAndDelete(id);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "User not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteUser = deleteUser;
