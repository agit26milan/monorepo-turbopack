import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { getTokenFromClient } from "../utils/request";
import ResponseEntity from "../entities/ResponseEntity";
import { FAILED_STATUS, SUCCESS_STATUS } from "../constant";


export const getUserByToken = async (req: Request, res: Response) => {
  try {
    const token = getTokenFromClient(req);
    const user = await UserService.getUserByToken(token);
    res.status(200).json(new ResponseEntity(SUCCESS_STATUS, user, 'Success get detail user'))
  } catch (e) {
    res.status(400).json(new ResponseEntity(FAILED_STATUS, null, 'Failed get detail user'))

  }
};
