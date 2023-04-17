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
exports.getTopRestaurants = exports.search = exports.getAll = exports.getOne = exports.createRestaurant = exports.updateRestaurant = exports.deleteRestaurant = void 0;
const restaurants_model_1 = __importDefault(require("../models/restaurants.model"));
const getTopRestaurants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield restaurants_model_1.default.aggregate([{ $unwind: '$restaurantRate' }, { $group: { _id: { restaurantName: '$restaurantName', img: '$img' }, avg_score: { $avg: '$restaurantRate.score' } } }]).sort({ avg_score: -1 }).limit(3);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getTopRestaurants = getTopRestaurants;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield restaurants_model_1.default.find();
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
        const data = yield restaurants_model_1.default.findById(id);
        if (data) {
            const result = yield restaurants_model_1.default.findById(id);
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
const createRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield restaurants_model_1.default.create(req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.createRestaurant = createRestaurant;
const updateRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield restaurants_model_1.default.findById(id);
        if (checkId) {
            const result = yield restaurants_model_1.default.findByIdAndUpdate(id, req.body);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Restaurant not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateRestaurant = updateRestaurant;
const deleteRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield restaurants_model_1.default.findById(id);
        if (checkId) {
            const result = yield restaurants_model_1.default.findByIdAndDelete(id);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Restaurant not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteRestaurant = deleteRestaurant;
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pageSize, searchTxt } = req.body;
    let search;
    if (searchTxt) {
        search = {
            $or: [
                { restaurantName: { $regex: searchTxt, $options: 'i' } }
            ]
        };
    }
    else {
        search = {};
    }
    try {
        const rowCount = yield restaurants_model_1.default.find(search).count();
        const result = yield restaurants_model_1.default.find(search).limit(9).skip(9 * (pageSize - 1));
        if (result.length > 0) {
            res.json({ status: true, result, totalRow: rowCount });
        }
        else {
            res.json({ status: false, message: "not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.search = search;
