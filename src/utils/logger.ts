import { Request, Response } from 'express';
import chalk from 'chalk';
import path from 'path';

export enum LogLevel {
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
}

export interface LogContext {
  userId?: string;
  requestId?: string;
  method?: string;
  url?: string;
  statusCode?: number;
  responseTime?: number;
  userAgent?: string;
  ip?: string;
  [key: string]: any;
}

export interface CallerInfo {
  fileName: string;
  lineNumber: number;
  functionName?: string | null;
  fullPath: string;
}

class Logger {
  private showCaller: boolean = true;
  private projectRoot: string;

  constructor(options: { showCaller?: boolean; projectRoot?: string } = {}) {
    this.showCaller = options.showCaller ?? true;
    this.projectRoot = options.projectRoot || process.cwd();
  }

  private formatTimestamp(): string {
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

  private getStatusColor(statusCode: number): (text: string) => string {
    if (statusCode >= 500) return chalk.red.bold;
    if (statusCode >= 400) return chalk.red;
    if (statusCode >= 300) return chalk.yellow;
    if (statusCode >= 200) return chalk.green;
    return chalk.white;
  }

  private getMethodColor(method: string): (text: string) => string {
    switch (method) {
      case 'GET':
        return chalk.blue.bold;
      case 'POST':
        return chalk.green.bold;
      case 'PUT':
        return chalk.yellow.bold;
      case 'DELETE':
        return chalk.red.bold;
      case 'PATCH':
        return chalk.magenta.bold;
      default:
        return chalk.white.bold;
    }
  }

  private getCaller(): CallerInfo | null {
    if (!this.showCaller) return null;

    const originalPrepareStackTrace = Error.prepareStackTrace;

    try {
      Error.prepareStackTrace = (_, stack) => stack;
      const stack = new Error().stack as unknown as NodeJS.CallSite[];

      // Find the first stack frame that's not from this logger file
      let callerFrame: NodeJS.CallSite | null = null;

      for (let i = 0; i < stack.length; i++) {
        const frame = stack[i];
        const fileName = frame.getFileName();

        if (
          fileName &&
          !fileName.includes('logger') &&
          !fileName.includes('Logger')
        ) {
          callerFrame = frame;
          break;
        }
      }

      if (!callerFrame) return null;

      const fileName = callerFrame.getFileName() || 'unknown';
      const lineNumber = callerFrame.getLineNumber() || 0;
      const functionName =
        callerFrame.getFunctionName() || callerFrame.getMethodName();

      // Get relative path from project root
      const relativePath = path.relative(this.projectRoot, fileName);
      const shortFileName = relativePath.startsWith('..')
        ? path.basename(fileName)
        : relativePath;

      return {
        fileName: shortFileName,
        lineNumber,
        functionName,
        fullPath: fileName,
      };
    } catch (error) {
      return null;
    } finally {
      Error.prepareStackTrace = originalPrepareStackTrace;
    }
  }

  private formatCaller(caller: CallerInfo | null): string {
    if (!caller) return '';

    const fileName = chalk.cyan(caller.fileName);
    const lineNumber = chalk.yellow(`:${caller.lineNumber}`);
    const functionName = caller.functionName
      ? chalk.magenta(` (${caller.functionName})`)
      : '';

    return chalk.gray(` [${fileName}${lineNumber}${functionName}]`);
  }

  private formatContext(context?: LogContext): string {
    if (!context || Object.keys(context).length === 0) return '';

    const filteredContext = { ...context };
    delete filteredContext.method;
    delete filteredContext.url;
    delete filteredContext.statusCode;

    if (Object.keys(filteredContext).length === 0) return '';

    return chalk.gray(
      '\n  ' + JSON.stringify(filteredContext, null, 2).replace(/\n/g, '\n  ')
    );
  }

  private getLogPrefix(
    level: string,
    levelColor: (text: string) => string
  ): string {
    const timestamp = chalk.gray(`[${this.formatTimestamp()}]`);
    const caller = this.formatCaller(this.getCaller());
    const logLevel = levelColor(level.padEnd(5));

    return `${timestamp}${caller} ${logLevel}`;
  }

  public error(message: string, context?: LogContext): void {
    const prefix = this.getLogPrefix('ERROR', chalk.red.bold);
    const msg = chalk.red(message);
    const ctx = this.formatContext(context);

    console.error(`${prefix} ${msg}${ctx}`);
  }

  public warn(message: string, context?: LogContext): void {
    const prefix = this.getLogPrefix('WARN', chalk.yellow.bold);
    const msg = chalk.yellow(message);
    const ctx = this.formatContext(context);

    console.warn(`${prefix} ${msg}${ctx}`);
  }

  public info(message: string, context?: LogContext): void {
    const prefix = this.getLogPrefix('INFO', chalk.blue.bold);
    const msg = chalk.white(message);
    const ctx = this.formatContext(context);

    console.info(`${prefix} ${msg}${ctx}`);
  }

  public debug(message: string, context?: LogContext): void {
    if (process.env.NODE_ENV === 'development') {
      const prefix = this.getLogPrefix('DEBUG', chalk.magenta.bold);
      const msg = chalk.magenta(message);
      const ctx = this.formatContext(context);

      console.debug(`${prefix} ${msg}${ctx}`);
    }
  }

  public request(req: Request, res: Response, responseTime: number): void {
    const timestamp = chalk.gray(`[${this.formatTimestamp()}]`);
    const caller = this.formatCaller(this.getCaller());
    const method = this.getMethodColor(req.method)(req.method.padEnd(6));
    const url = chalk.cyan(req.originalUrl);
    const status = this.getStatusColor(res.statusCode)(
      res.statusCode.toString()
    );
    const time = chalk.gray(`${Math.round(responseTime)}ms`);
    const ip = chalk.gray(`${req.ip || req.socket.remoteAddress}`);

    // Create a clean one-liner for requests
    console.info(
      `${timestamp}${caller} ${method} ${url} ${status} ${time} ${ip}`
    );

    // Only show additional context for errors or in debug mode
    if (res.statusCode >= 400 || process.env.NODE_ENV === 'development') {
      const context: LogContext = {
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
  public enableCaller(): void {
    this.showCaller = true;
  }

  public disableCaller(): void {
    this.showCaller = false;
  }

  public setProjectRoot(projectRoot: string): void {
    this.projectRoot = projectRoot;
  }

  // Advanced logging methods with structured data
  public logWithStackTrace(
    level: LogLevel,
    message: string,
    error?: Error,
    context?: LogContext
  ): void {
    const contextWithStack = {
      ...context,
      ...(error && {
        errorName: error.name,
        errorMessage: error.message,
        stackTrace: error.stack,
      }),
    };

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
  public time(label: string): void {
    console.time(`${this.formatCaller(this.getCaller())} ${label}`);
  }

  public timeEnd(label: string): void {
    console.timeEnd(`${this.formatCaller(this.getCaller())} ${label}`);
  }

  // Conditional logging
  public errorIf(
    condition: boolean,
    message: string,
    context?: LogContext
  ): void {
    if (condition) {
      this.error(message, context);
    }
  }

  public warnIf(
    condition: boolean,
    message: string,
    context?: LogContext
  ): void {
    if (condition) {
      this.warn(message, context);
    }
  }

  public infoIf(
    condition: boolean,
    message: string,
    context?: LogContext
  ): void {
    if (condition) {
      this.info(message, context);
    }
  }

  public debugIf(
    condition: boolean,
    message: string,
    context?: LogContext
  ): void {
    if (condition) {
      this.debug(message, context);
    }
  }
}

// Create default logger instance
export const logger = new Logger();
