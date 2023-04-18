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
exports.getAll = exports.getOne = exports.createFood = exports.updateFood = exports.deleteFood = void 0;
const food_model_1 = __importDefault(require("../models/food.model"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield food_model_1.default.find();
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
        const data = yield food_model_1.default.findById(id);
        if (data) {
            const result = yield food_model_1.default.findById(id);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Not Found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getOne = getOne;
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield food_model_1.default.create(req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.createFood = createFood;
const updateFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield food_model_1.default.findById(id);
        if (checkId) {
            const result = yield food_model_1.default.findByIdAndUpdate(id, req.body);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Food not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateFood = updateFood;
const deleteFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield food_model_1.default.findById(id);
        if (checkId) {
            const result = yield food_model_1.default.findByIdAndDelete(id);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Food not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteFood = deleteFood;
