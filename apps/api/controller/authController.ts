import { Request, Response } from "express";
import admin from "../firebase/admin";
import { FAILED_STATUS, SUCCESS_STATUS } from "../constant";
import ResponseEntity from "../entities/ResponseEntity";
import {
  User,
  UserDocument,
  UserRepository,
} from "../repository/userRepository";
import UserEntity from "../entities/UserEntity";
import { AuthenticatedRequest } from "../middleware/authMiddleware";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    let response: any = await admin.auth().createUser({
      email,
      password,
    });
    const detailUser: User | null = await UserRepository.getUserByUserId(
      response.uid
    );
    const today = new Date().getTime();
    const payload: UserDocument = new UserEntity(
      detailUser?.email,
      detailUser?.displayName,
      detailUser?.photoURL,
      today,
      today,
      0,
      0,
      0,
      detailUser?.uid
    ).generatePayloadCreateDocumentUser();
    await UserRepository.createUserData(payload);
    const token = await admin.auth().createCustomToken(response.uid);
    response = { ...detailUser, token };
    res
      .status(200)
      .json(new ResponseEntity(SUCCESS_STATUS, response, "Success Register"));
  } catch (error) {
    res
      .status(400)
      .json(new ResponseEntity(FAILED_STATUS, error, "Fail add user"));
  }
};

export const logoutUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (req.user?.uid) {
      const response = await admin.auth().revokeRefreshTokens(req.user?.uid);
      res
        .status(200)
        .json(new ResponseEntity(SUCCESS_STATUS, response, "Success Logout"));
    } else {
      res
        .status(400)
        .json(new ResponseEntity(FAILED_STATUS, null, "User not found"));
    }
  } catch (e) {
    res
      .status(400)
      .json(new ResponseEntity(FAILED_STATUS, null, "Failed to logout"));
  }
};
