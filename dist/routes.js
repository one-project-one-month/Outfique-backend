"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = require("./features/user/user.routes");
const health_1 = __importDefault(require("./health"));
const routes = (0, express_1.Router)();
routes.use('/', health_1.default);
routes.use('/users', user_routes_1.userRoutes);
exports.default = routes;
