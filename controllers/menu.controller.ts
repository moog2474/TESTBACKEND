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
  const { id } = req.query;
  try {
    const data = await Menu.findById(id);
    if (data) {
      const result = await Menu.findById(id);
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Not Found" });
    }
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
  const { id } = req.query;

  try {
    const checkId = await Menu.findById(id);
    if (checkId) {
      const result = await Menu.findByIdAndUpdate(id, req.body);
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Menu not found" });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const deleteMenu = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const checkId = await Menu.findById(id);
    if (checkId) {
      const result = await Menu.findByIdAndDelete(id);
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Menu not found" });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

export { deleteMenu, updateMenu, createMenu, getOne, getAll };
