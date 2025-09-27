"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessLogFormat = exports.auditLogFormat = void 0;
exports.auditLogFormat = ':method :url :status :response-time ms - :res[content-length] :body';
exports.accessLogFormat = ':date[iso] :method :url';
