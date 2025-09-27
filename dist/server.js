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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
const logger_1 = require("./utils/logger");
const PORT = process.env.PORT || 8000;
console.log('env file ', process.env.DATABASE_URL);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, database_1.connectPrisma)();
            // Start server
            app_1.default.listen(PORT, () => {
                logger_1.logger.info('Server started successfully', {
                    port: PORT,
                    environment: process.env.NODE_ENV || 'development',
                    nodeVersion: process.version,
                });
            });
            process.on('SIGTERM', () => __awaiter(this, void 0, void 0, function* () {
                logger_1.logger.info('SIGTERM received, shutting down gracefully');
                yield (0, database_1.disconnectPrisma)();
                process.exit(0);
            }));
            process.on('SIGINT', () => __awaiter(this, void 0, void 0, function* () {
                logger_1.logger.info('SIGINT received, shutting down gracefully');
                yield (0, database_1.disconnectPrisma)();
                process.exit(0);
            }));
        }
        catch (error) {
            logger_1.logger.error('Failed to start server', {
                error: error instanceof Error ? error.message : 'Unknown error',
            });
            process.exit(1);
        }
    });
}
startServer().then((r) => logger_1.logger.info('Server started' + r));
