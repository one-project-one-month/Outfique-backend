"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.LogLevel = void 0;
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
var LogLevel;
(function (LogLevel) {
    LogLevel["ERROR"] = "ERROR";
    LogLevel["WARN"] = "WARN";
    LogLevel["INFO"] = "INFO";
    LogLevel["DEBUG"] = "DEBUG";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class Logger {
    constructor(options = {}) {
        var _a;
        this.showCaller = true;
        this.showCaller = (_a = options.showCaller) !== null && _a !== void 0 ? _a : true;
        this.projectRoot = options.projectRoot || process.cwd();
    }
    formatTimestamp() {
        return new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });
    }
    getStatusColor(statusCode) {
        if (statusCode >= 500)
            return chalk_1.default.red.bold;
        if (statusCode >= 400)
            return chalk_1.default.red;
        if (statusCode >= 300)
            return chalk_1.default.yellow;
        if (statusCode >= 200)
            return chalk_1.default.green;
        return chalk_1.default.white;
    }
    getMethodColor(method) {
        switch (method) {
            case 'GET':
                return chalk_1.default.blue.bold;
            case 'POST':
                return chalk_1.default.green.bold;
            case 'PUT':
                return chalk_1.default.yellow.bold;
            case 'DELETE':
                return chalk_1.default.red.bold;
            case 'PATCH':
                return chalk_1.default.magenta.bold;
            default:
                return chalk_1.default.white.bold;
        }
    }
    getCaller() {
        if (!this.showCaller)
            return null;
        const originalPrepareStackTrace = Error.prepareStackTrace;
        try {
            Error.prepareStackTrace = (_, stack) => stack;
            const stack = new Error().stack;
            // Find the first stack frame that's not from this logger file
            let callerFrame = null;
            for (let i = 0; i < stack.length; i++) {
                const frame = stack[i];
                const fileName = frame.getFileName();
                if (fileName &&
                    !fileName.includes('logger') &&
                    !fileName.includes('Logger')) {
                    callerFrame = frame;
                    break;
                }
            }
            if (!callerFrame)
                return null;
            const fileName = callerFrame.getFileName() || 'unknown';
            const lineNumber = callerFrame.getLineNumber() || 0;
            const functionName = callerFrame.getFunctionName() || callerFrame.getMethodName();
            // Get relative path from project root
            const relativePath = path_1.default.relative(this.projectRoot, fileName);
            const shortFileName = relativePath.startsWith('..')
                ? path_1.default.basename(fileName)
                : relativePath;
            return {
                fileName: shortFileName,
                lineNumber,
                functionName,
                fullPath: fileName,
            };
        }
        catch (error) {
            return null;
        }
        finally {
            Error.prepareStackTrace = originalPrepareStackTrace;
        }
    }
    formatCaller(caller) {
        if (!caller)
            return '';
        const fileName = chalk_1.default.cyan(caller.fileName);
        const lineNumber = chalk_1.default.yellow(`:${caller.lineNumber}`);
        const functionName = caller.functionName
            ? chalk_1.default.magenta(` (${caller.functionName})`)
            : '';
        return chalk_1.default.gray(` [${fileName}${lineNumber}${functionName}]`);
    }
    formatContext(context) {
        if (!context || Object.keys(context).length === 0)
            return '';
        const filteredContext = Object.assign({}, context);
        delete filteredContext.method;
        delete filteredContext.url;
        delete filteredContext.statusCode;
        if (Object.keys(filteredContext).length === 0)
            return '';
        return chalk_1.default.gray('\n  ' + JSON.stringify(filteredContext, null, 2).replace(/\n/g, '\n  '));
    }
    getLogPrefix(level, levelColor) {
        const timestamp = chalk_1.default.gray(`[${this.formatTimestamp()}]`);
        const caller = this.formatCaller(this.getCaller());
        const logLevel = levelColor(level.padEnd(5));
        return `${timestamp}${caller} ${logLevel}`;
    }
    error(message, context) {
        const prefix = this.getLogPrefix('ERROR', chalk_1.default.red.bold);
        const msg = chalk_1.default.red(message);
        const ctx = this.formatContext(context);
        console.error(`${prefix} ${msg}${ctx}`);
    }
    warn(message, context) {
        const prefix = this.getLogPrefix('WARN', chalk_1.default.yellow.bold);
        const msg = chalk_1.default.yellow(message);
        const ctx = this.formatContext(context);
        console.warn(`${prefix} ${msg}${ctx}`);
    }
    info(message, context) {
        const prefix = this.getLogPrefix('INFO', chalk_1.default.blue.bold);
        const msg = chalk_1.default.white(message);
        const ctx = this.formatContext(context);
        console.info(`${prefix} ${msg}${ctx}`);
    }
    debug(message, context) {
        if (process.env.NODE_ENV === 'development') {
            const prefix = this.getLogPrefix('DEBUG', chalk_1.default.magenta.bold);
            const msg = chalk_1.default.magenta(message);
            const ctx = this.formatContext(context);
            console.debug(`${prefix} ${msg}${ctx}`);
        }
    }
    request(req, res, responseTime) {
        const timestamp = chalk_1.default.gray(`[${this.formatTimestamp()}]`);
        const caller = this.formatCaller(this.getCaller());
        const method = this.getMethodColor(req.method)(req.method.padEnd(6));
        const url = chalk_1.default.cyan(req.originalUrl);
        const status = this.getStatusColor(res.statusCode)(res.statusCode.toString());
        const time = chalk_1.default.gray(`${Math.round(responseTime)}ms`);
        const ip = chalk_1.default.gray(`${req.ip || req.socket.remoteAddress}`);
        // Create a clean one-liner for requests
        console.info(`${timestamp}${caller} ${method} ${url} ${status} ${time} ${ip}`);
        // Only show additional context for errors or in debug mode
        if (res.statusCode >= 400 || process.env.NODE_ENV === 'development') {
            const context = {
                userAgent: req.get('User-Agent'),
                contentLength: res.get('Content-Length'),
            };
            if (req.body && Object.keys(req.body).length > 0) {
                context.requestBody = req.body;
            }
            const ctx = this.formatContext(context);
            if (ctx) {
                console.info(ctx);
            }
        }
    }
    // Utility methods for configuration
    enableCaller() {
        this.showCaller = true;
    }
    disableCaller() {
        this.showCaller = false;
    }
    setProjectRoot(projectRoot) {
        this.projectRoot = projectRoot;
    }
    // Advanced logging methods with structured data
    logWithStackTrace(level, message, error, context) {
        const contextWithStack = Object.assign(Object.assign({}, context), (error && {
            errorName: error.name,
            errorMessage: error.message,
            stackTrace: error.stack,
        }));
        switch (level) {
            case LogLevel.ERROR:
                this.error(message, contextWithStack);
                break;
            case LogLevel.WARN:
                this.warn(message, contextWithStack);
                break;
            case LogLevel.INFO:
                this.info(message, contextWithStack);
                break;
            case LogLevel.DEBUG:
                this.debug(message, contextWithStack);
                break;
        }
    }
    // Performance logging
    time(label) {
        console.time(`${this.formatCaller(this.getCaller())} ${label}`);
    }
    timeEnd(label) {
        console.timeEnd(`${this.formatCaller(this.getCaller())} ${label}`);
    }
    // Conditional logging
    errorIf(condition, message, context) {
        if (condition) {
            this.error(message, context);
        }
    }
    warnIf(condition, message, context) {
        if (condition) {
            this.warn(message, context);
        }
    }
    infoIf(condition, message, context) {
        if (condition) {
            this.info(message, context);
        }
    }
    debugIf(condition, message, context) {
        if (condition) {
            this.debug(message, context);
        }
    }
}
// Create default logger instance
exports.logger = new Logger();
