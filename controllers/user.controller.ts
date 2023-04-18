import Users from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const uri: string = process.env.TOKEN_SECRET_KEY || "";



const getTopUsers = async (req: Request, res: Response) => {
  const result = await Users.aggregate([{ $unwind: '$point' }, { $group: { _id: { username: '$userName', img: '$img', comment: '$comment' }, points: { $sum: '$point' } } }]).sort({ points: -1 }).limit(10)
  try {
    res.json({ status: true, result })
  }
  catch (err) {
    res.json({ status: false, result })
  }
}

const getAll = async (req: Request, res: Response) => {
  const result = await Users.find();

  if (result) {
    res.json({ status: true, result });
    return;
  } else {
    res.json({ status: false, message: "Users not found" });
  }
  return;
};

const getOne = async (req: Request, res: Response) => {
  const { id } = req.query;

  const result = await Users.findById(id);

  if (result) {
    res.json({ status: true, result });
    return;
  } else {
    res.json({ status: false, message: "User not found" });
  }
  return;
};

const register = async (req: Request, res: Response) => {
  const {
    name,
    userName,
    email,
    phone,
    password,
    point,
    userType,
    img
  } = req.body;

  if (!email || !password) {
    res.json({ status: false, message: "Medeellee buren oruulna uu" });
    return;
  }

  const hashedPass = await bcrypt.hash(password, 8);
  if (hashedPass) {
    const newUser = new Users({
      name,
      userName,
      email,
      phone,
      password: hashedPass,
      point,
      userType,
      img
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
    res.json({
      status: false,
      message: "Password amjilttai encrypt hiigeegui baina",
    });
    return;
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({ status: false, message: "Medeellee buren oruulna uu" });
    return;
  }

  const user = await Users.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ user: user }, uri, {
      expiresIn: "2h",
    });

    res.json({ status: true, data: user, message: "Success", token });
    return;
  } else {
    res.json({ status: false, message: "email or password wrong" });
    return;
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const checkId = await Users.findById(id)
    if (checkId) {
      const result = await Users.findByIdAndUpdate(id, req.body);
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "User not found" })
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
// update huuchin huvilbaraa butsana

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const checkId = await Users.findById(id)
    if (checkId) {
      const result = await Users.findByIdAndDelete(id);
      res.json({ status: true, result })
    } else {
      res.json({ status: false, message: "User not found" })
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

export { deleteUser, updateUser, login, register, getOne, getAll, getTopUsers };
