import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { accessLogFormat } from './configs/log-formats';

import { logger } from './utils/logger';

import { errorHandler } from './middleware/error-handler';
import routes from './routes';

const app = express();

app.use(helmet());

app.use(cors());

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

app.use(`/api/${API_VERSION}`, routes);

app.use(errorHandler);

export default app;
