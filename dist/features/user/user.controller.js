"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.UserController = void 0;
const user_service_1 = require("./user.service");
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const newUser = yield user_service_1.userService.createUser(userData);
            res.status(201).json(newUser);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            try {
                const user = yield user_service_1.userService.getUserById(id);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).send('User not found.');
                }
            }
            catch (error) {
                res.status(500).send('Error fetching user.');
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_service_1.userService.getAllUsers();
                res.status(200).json({
                    message: 'hey ',
                });
            }
            catch (error) {
                res.status(500).send('Error fetching users.');
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            const updateData = req.body;
            try {
                const updatedUser = yield user_service_1.userService.updateUser(id, updateData);
                if (updatedUser) {
                    res.status(200).json(updatedUser);
                }
                else {
                    res.status(404).send('User not found.');
                }
            }
            catch (error) {
                res.status(500).send('Error updating user.');
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            try {
                yield user_service_1.userService.deleteUser(id);
                res.status(204).send();
            }
            catch (error) {
                res.status(404).send('User not found or error deleting user.');
            }
        });
    }
}
exports.UserController = UserController;
exports.userController = new UserController();
