import Beverages from "../models/beverage.model";
import { Request, Response } from "express";


const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Beverages.find();
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { id } = req.query;
    try {
        const data = await Beverages.findById(id);
        if (data) {
            const result = await Beverages.findById(id);
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Not Found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const createBeverage = async (req: Request, res: Response) => {
    try {
        const result = await Beverages.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const updateBeverage = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
        const checkId = await Beverages.findById(id);
        if (checkId) {
            const result = await Beverages.findByIdAndUpdate(id, req.body);
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Beverage not found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const deleteBeverage = async (req: Request, res: Response) => {
    const { id } = req.query;
    try {
        const checkId = await Beverages.findById(id);
        if (checkId) {
            const result = await Beverages.findByIdAndDelete(id);
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Beverage not found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

export { deleteBeverage, updateBeverage, createBeverage, getOne, getAll };
