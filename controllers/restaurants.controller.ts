import Restaurants from "../models/restaurants.model";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
  try {
    const result = await Restaurants.find();
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    const result = await Restaurants.findById(id);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const createRestaurant = async (req: Request, res: Response) => {
  try {
    const result = await Restaurants.create(req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const updateRestaurant = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    const checkId = await Restaurants.findById(id)
    if (checkId) {
      const result = await Restaurants.findByIdAndUpdate(id, req.body);
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Restaurant not found" })
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const deleteRestaurant = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const checkId = await Restaurants.findById(id);
    if (checkId) {
      const result = await Restaurants.findByIdAndDelete(id);
      res.json({ status: true, result })
    } else {
      res.json({ status: false, message: "Restaurant not found" })
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

export { deleteRestaurant, updateRestaurant, createRestaurant, getOne, getAll };
