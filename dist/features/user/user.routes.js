"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const router = (0, express_1.Router)();
router.post('/', (0, catchAsync_1.default)(user_controller_1.userController.createUser));
router.get('/:id', user_controller_1.userController.getUserById);
router.get('/', user_controller_1.userController.getAllUsers);
router.put('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.userRoutes = router;
