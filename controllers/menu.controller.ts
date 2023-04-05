import Menu from "../models/menu.model";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Menu.find();
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.query;

    try {
        const result = await Menu.find({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const createMenu = async (req: Request, res: Response) => {
    try {
        const result = await Menu.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const updateMenu = async (req: Request, res: Response) => {
    const { _id } = req.query;

    try {
        const result = await Menu.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const deleteMenu = async (req: Request, res: Response) => {
    const { _id } = req.query;
    try {
        const result = await Menu.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

export { deleteMenu, updateMenu, createMenu, getOne, getAll }