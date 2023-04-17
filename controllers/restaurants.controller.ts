import Restaurants from "../models/restaurants.model";
import { Request, Response } from "express";


const getTopRestaurants = async (req: Request, res: Response) => {
  try {
    const result = await Restaurants.aggregate([{ $unwind: '$restaurantRate' }, { $group: { _id: { restaurantName: '$restaurantName', img: '$img' }, avg_score: { $avg: '$restaurantRate.score' } } }]).sort({ avg_score: -1 }).limit(3)
    res.json({ status: true, result })
  } catch (err) {
    res.json({ status: false, message: err })
  }
}

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
    const data = await Restaurants.findById(id);
    if (data) {
      const result = await Restaurants.findById(id);
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Not Found" });
    }
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
    const checkId = await Restaurants.findById(id);
    if (checkId) {
      const result = await Restaurants.findByIdAndUpdate(id, req.body);
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Restaurant not found" });
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
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Restaurant not found" });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const search = async (req: Request, res: Response) => {
  const { pageSize, searchTxt } = req.body
  let search;

  if (searchTxt) {
    search = {
      $or: [
        { restaurantName: { $regex: searchTxt, $options: 'i' } }
      ]
    }
  } else {
    search = {}
  }

  try {
    const rowCount = await Restaurants.find(search).count()
    const result = await Restaurants.find(search).limit(9).skip(9 * (pageSize - 1))

    if (result.length > 0) {
      res.json({ status: true, result, totalRow: rowCount })
    } else {
      res.json({ status: false, message: "not found" })
    }
  } catch (err) {
    res.json({ status: false, message: err })
  }
}

export { deleteRestaurant, updateRestaurant, createRestaurant, getOne, getAll, search, getTopRestaurants };
