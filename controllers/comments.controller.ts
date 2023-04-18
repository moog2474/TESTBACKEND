import Comments from "../models/comments.model";
import { Request, Response } from "express";
import Foods from "../models/food.model";

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
    if (result) {
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Comment not found" });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const createComment = async (req: Request, res: Response) => {
  const food = req.body.foodId
  console.log(food);

  try {
    const result = await Comments.create(req.body);


    const avg = await Comments.find({ foodId: food })
    const avg = await Comments.aggregate([{ $match: { foodId: food } },
    { $group: { _id: '$foodId', avg_rate: { $avg: '$rate' } } }
    ])

    // const last = await Foods.findByIdAndUpdate(food, { rate: avg.avg_rate })

    res.json({ status: true, result, avg });
  } catch (err) {
    console.log(err);

    res.json({ status: false, message: err });
  }
};

const updateComment = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    const checkId = await Comments.findById(id);
    if (checkId) {
      const result = await Comments.findByIdAndUpdate(id, req.body);
      res.json({ status: true, result: result });
    } else {
      res.json({ status: false, result: "Comment not found" });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const checkId = await Comments.findById(id);
    if (checkId) {
      const result = await Comments.findByIdAndDelete(id);
      res.json({ status: true, result: result });
    } else {
      res.json({ status: false, result: "Comment not found" });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getLatestComments = async (req: Request, res: Response) => {

  try {
    const result = await Comments.find().sort({ createdAt: -1 }).populate([{ path: 'userId', select: 'userName' }, { path: "restaurantId", select: "restaurantName " }]).limit(5);
    res.json({ status: true, result });
  } catch (err) {
    console.log(err);

    res.json({ status: false, message: err });
  }
};


const getTopFood = async (req: Request, res: Response) => {
  try {
    const result = await Comments.aggregate([
      { $group: { _id: '$foodId', avg_rate: { $avg: '$rate' } } }
    ]).sort({ avg_rate: -1 }).limit(6)
    res.json({ status: true, result })
  } catch (err) {
    res.json({ status: false, message: err })
  }
}


export {
  deleteComment,
  updateComment,
  createComment,
  getOne,
  getAll,
  getLatestComments,
  getTopFood
};
