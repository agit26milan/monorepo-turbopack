import { Request, Response } from 'express';
import admin from '../firebase/admin';
import { FAILED_STATUS, SUCCESS_STATUS } from '../constant';
import ResponseEntity from '../entities/ResponseEntity';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    let response:any = await admin.auth().createUser({
      email,
      password
    })
    const token = await admin.auth().createCustomToken(response.uid);
    response = {...response, token}
    res.status(200).json(new ResponseEntity(SUCCESS_STATUS, response, 'Success Register'))
  }catch(error){
    res.status(400).json(new ResponseEntity(FAILED_STATUS, error, 'Fail add user'))
  }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const {authorization} = req.headers
        const token:string = authorization?.split('Bearer ')[1] || ''
        const response = await admin.auth().verifyIdToken(token)
        res.status(200).json(new ResponseEntity(SUCCESS_STATUS, response, 'Success Login'))
    }catch(e) {
        res.status(400).json(new ResponseEntity(FAILED_STATUS, e, 'Failed to Login'))

    }
}