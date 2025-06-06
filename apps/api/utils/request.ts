import { Request } from "express";

export const getTokenFromClient = (req: Request) => {
  const { authorization } = req.headers;
  const token: string = authorization?.split("Bearer ")[1] || "";
  return token
};
