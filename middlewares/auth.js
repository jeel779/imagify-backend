import jwt from "jsonwebtoken"

const userAuth = async (req, res, next) => {
  req.user = "mock-user-id";
  next();
};
export default userAuth