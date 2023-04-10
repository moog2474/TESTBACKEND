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
  const { id } = req.query;

  try {
    const result = await Comments.findById(id);
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
  const { id } = req.query;

  try {
    const checkId = await Comments.findById(id)
    if (checkId) {
      const result = await Comments.findByIdAndUpdate(id, req.body);
      res.json({ status: true, result: result })
    } else {
      res.json({ status: false, result: "Comment not found" })
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const checkId = await Comments.findById(id)
    if (checkId) {
      const result = await Comments.findByIdAndDelete(id);
      res.json({ status: true, result: result })
    } else {
      res.json({ status: false, result: "Comment not found" })
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

export { deleteComment, updateComment, createComment, getOne, getAll };
