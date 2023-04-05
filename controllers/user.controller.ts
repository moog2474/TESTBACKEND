import Users from "../models/user.model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const uri: string = process.env.TOKEN_SECRET_KEY || ""

const getAll = async (req: Request, res: Response) => {
  const result = await Users.find({});

  if (result) {
    res.json({ status: true, result })
    return;
  } else {
    res.json({ status: false, message: "User not found" })
  }
  return;
};

const getOne = async (req: Request, res: Response) => {
  const { _id } = req.query;

  const result = await Users.find({ _id });

  if (result) {
    res.json({ status: true, result })
    return;
  } else {
    res.json({ status: false, message: "User not found" });
  }
  return;
};

const register = async (req: Request, res: Response) => {
  const { firstName, lastName, userName, email, password } = req.body;

  if (!email || !password) {
    res.json({ status: false, message: "Medeellee buren oruulna uu" })
    return;
  }

  const hashedPass = await bcrypt.hash(password, 8);
  if (hashedPass) {
    const newUser = new Users({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPass,
    });

    const result = await newUser.save();

    if (result) {
      res.json({ status: true, message: "Amjilttai hadgalagdlaa" });
      return;
    } else {
      res.json({ status: false, message: "Hadgalahad aldaa garlaa" });
      return;
    }
  } else {
    res.json({ status: false, message: "Password amjilttai encrypt hiigeegui baina" });
    return;
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({ status: false, message: "Medeellee buren oruulna uu" })
    return;
  }

  const user = await Users.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ user: user }, uri, {
      expiresIn: "2h",
    });

    res.json({ status: true, data: user, message: "Success", token })
    return;
  } else {
    res.json({ status: false, message: "email or password wrong" })
    return;
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { _id } = req.query;
  try {
    const result = await Users.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: false, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { _id } = req.query;
  try {
    const result = await Users.findByIdAndDelete({ _id });
    res.json({ status: false, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

export { deleteUser, updateUser, login, register, getOne, getAll }