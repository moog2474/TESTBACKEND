import Foods from "../models/food.model";
import { Request, Response } from "express";


const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Foods.find();
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { id } = req.query;
    try {
        const data = await Foods.findById(id);
        if (data) {
            const result = await Foods.findById(id);
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Not Found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const createFood = async (req: Request, res: Response) => {
    try {
        const result = await Foods.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const updateFood = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
        const checkId = await Foods.findById(id);
        if (checkId) {
            const result = await Foods.findByIdAndUpdate(id, req.body);
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Food not found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const deleteFood = async (req: Request, res: Response) => {
    const { id } = req.query;
    try {
        const checkId = await Foods.findById(id);
        if (checkId) {
            const result = await Foods.findByIdAndDelete(id);
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "Food not found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

export { deleteFood, updateFood, createFood, getOne, getAll };
