import { Request, Response, NextFunction } from "express";
import { UserService } from "../../application/services/userService";
import {  plainToInstance } from "class-transformer";
import { CreateUserDto } from "../../application/dto/createUserDto.dto";
import { validate } from "class-validator";
import { UpdateUserDto } from "../../application/dto/updateUserDto.dto";

export class UserController {
  constructor(private userService: UserService) {}

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createUserDto = plainToInstance(CreateUserDto, req.body);
      const errors = await validate(createUserDto);
      if (errors.length > 0) {
        return res.status(400).json({ errors: errors.map((error) => Object.values(error.constraints || {}))});
      }
      const newUser = await this.userService.createUser(createUserDto);
      return res.status(201).json({ newUser });
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateUserDto = plainToInstance(UpdateUserDto, { ...req.body, id: req.params.id });
      const errors = await validate(updateUserDto);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const updatedUser = await this.userService.updateUser(updateUserDto);
      return res.status(200).json({ updatedUser });
    } catch (error) {
      next(error);
    }
  };

  getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUsers = await this.userService.getAllUsers();
      res.status(200).json({ allUsers });
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const user = await this.userService.getUserById(id);
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const isDeleted = await this.userService.deleteUser(id);
      res.status(200).json({ isDeleted });
    } catch (error) {
      next(error);
    }
  };
}
