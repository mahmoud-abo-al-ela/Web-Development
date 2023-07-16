import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, unAuthenticatedError } from "../errors/index.js";
import attachCookie from "../utils/attachCookie.js";
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  attachCookie({ res, token });
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      lastName: user.lastName,
      location: user.location,
      email: user.email,
    },
    location: user.location,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new BadRequestError("This email does not exist");
  }
  const checkPassword = await user.comparePassword(password);
  if (!checkPassword) {
    throw new unAuthenticatedError("Invalid password");
  }
  const token = user.createJWT();
  attachCookie({ res, token });
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, location: user.location });
};

const updateUser = async (req, res) => {
  try {
    const { name, email, lastName, location } = req.body;
    if (!email || !name || !location || !lastName) {
      throw new BadRequestError("Please provide all values");
    }

    const user = await User.findOne({ _id: req.user.userId });

    user.name = name;
    user.email = email;
    user.lastName = lastName;
    user.location = location;

    await user.save();

    const token = user.createJWT();
    attachCookie({ res, token });
    res.status(StatusCodes.OK).json({ user, location: user.location });
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "An error occurred" });
    }
  }
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user, location: user.location });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

export { register, login, updateUser, getCurrentUser, logout };
