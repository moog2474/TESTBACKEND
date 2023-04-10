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
exports.getAll = exports.getOne = exports.createMenu = exports.updateMenu = exports.deleteMenu = void 0;
const menu_model_1 = __importDefault(require("../models/menu.model"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield menu_model_1.default.find();
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
        const data = yield menu_model_1.default.findById(id);
        if (data) {
            const result = yield menu_model_1.default.findById(id);
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
const createMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield menu_model_1.default.create(req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.createMenu = createMenu;
const updateMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield menu_model_1.default.findById(id);
        if (checkId) {
            const result = yield menu_model_1.default.findByIdAndUpdate(id, req.body);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Menu not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateMenu = updateMenu;
const deleteMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const checkId = yield menu_model_1.default.findById(id);
        if (checkId) {
            const result = yield menu_model_1.default.findByIdAndDelete(id);
            res.json({ status: true, result });
        }
        else {
            res.json({ status: false, message: "Menu not found" });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteMenu = deleteMenu;
