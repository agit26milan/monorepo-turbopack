import { Response } from "express";
import { UserService } from "../services/userService";
import ResponseEntity from "../entities/ResponseEntity";
import { FAILED_STATUS, SUCCESS_STATUS } from "../constant";
import { AuthenticatedRequest } from "../middleware/authMiddleware";


export const getUserDocument = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (req.user?.uid) {
      const documentDetail = await UserService.getUserData(req.user?.uid);
      res
        .status(200)
        .json(
          new ResponseEntity(
            SUCCESS_STATUS,
            documentDetail,
            "Success get detail user"
          )
        );
    } else {
      res
      .status(400)
      .json(new ResponseEntity(FAILED_STATUS, null, "Cannot get user uid"));
    }
    
  } catch (e) {
    res
      .status(400)
      .json(new ResponseEntity(FAILED_STATUS, null, "Cannot get user uid"));
  }
};

export const updateUserData = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user ||{}
    const response = await UserService.updateUserData(user, req.body)
    res.status(200).json(new ResponseEntity(SUCCESS_STATUS, response, "Success update user data"))
  }catch(e) {
    res.status(400).json(new ResponseEntity(FAILED_STATUS, null, "Failed update user data"))
  }
}