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
exports.getLatestComments = exports.getAll = exports.getOne = exports.createComment = exports.updateComment = exports.deleteComment = void 0;
const comments_model_1 = __importDefault(require("../models/comments.model"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield comments_model_1.default.find();
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const result = yield comments_model_1.default.findById(id);
        if (result) {
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Comment not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getOne = getOne;
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield comments_model_1.default.create(req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.createComment = createComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield comments_model_1.default.findById(id);
        if (checkId) {
            const result = yield comments_model_1.default.findByIdAndUpdate(id, req.body);
            res.json({ status: true, result: result });
        }
        else {
            res.json({ status: false, result: "Comment not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateComment = updateComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield comments_model_1.default.findById(id);
        if (checkId) {
            const result = yield comments_model_1.default.findByIdAndDelete(id);
            res.json({ status: true, result: result });
        }
        else {
            res.json({ status: false, result: "Comment not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteComment = deleteComment;
const getLatestComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield comments_model_1.default.find().sort({ createdAt: -1 }).limit(5);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getLatestComments = getLatestComments;
