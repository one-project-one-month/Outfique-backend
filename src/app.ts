import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { accessLogFormat } from './configs/log-formats';

import { logger } from './utils/logger';

import { errorHandler } from './middleware/error-handler';
import routes from './routes';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './features/auth/auth';

const app = express();

app.use(
  helmet()
);

app.use(
  cors({
    origin: 'http://localhost:5174', // your frontend URL
    credentials: true,
  })

);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan(accessLogFormat));

const API_VERSION = process.env.API_VERSION || 'v1';

// Custom logging middleware using our structured logger
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const responseTime = Date.now() - start;
    logger.request(req, res, responseTime);
  });

  next();
});



app.all('/api/auth/{*any}', toNodeHandler(auth));

// Find better-auth routes
// console.log('Better Auth routes mounted at: /api/auth/*');
// console.log('Available providers:', Object.keys(auth.options.socialProviders || {}));

app.use(`/api/${API_VERSION}`, routes);

app.use(errorHandler);

export default app;
