import Comments from "../models/comments.model";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Comments.find();
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.query;

    try {
        const result = await Comments.find({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const createComment = async (req: Request, res: Response) => {
    try {
        const result = await Comments.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const updateComment = async (req: Request, res: Response) => {
    const { _id } = req.query;

    try {
        const result = await Comments.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const deleteComment = async (req: Request, res: Response) => {
    const { _id } = req.query;
    try {
        const result = await Comments.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

export { deleteComment, updateComment, createComment, getOne, getAll }