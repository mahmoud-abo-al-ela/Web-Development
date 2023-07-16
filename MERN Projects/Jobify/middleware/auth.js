import { unAuthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new unAuthenticatedError("Authentication Error");
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    const testUser = payload.userId === "6490929bdb5d630cf6588069";
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new unAuthenticatedError("UnAuthenticated user");
  }
};
export default authenticateUser;
