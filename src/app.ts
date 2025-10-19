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
  helmet(
  //   {
  //   contentSecurityPolicy: {
  //     directives: {
  //       defaultSrc: ["'self'"],
  //       scriptSrc: ["'self'", "'unsafe-inline'", "https://esm.sh"],
  //       scriptSrcAttr: ["'unsafe-inline'"], // <-- allow onclick, onmouseover, etc.
  //       styleSrc: ["'self'", "'unsafe-inline'"],
  //       connectSrc: ["'self'", "*"], // allow all external connections for dev
  //     },
  //   },
  // }
)
);

app.use(cors(
//   {
//   origin: 'http://localhost:3000', // your frontend origin
//   credentials: true,               // allow cookies
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }
));

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



// import path from 'path';

// app.get('/test-signin', (req, res) => {
//   res.sendFile(path.join(process.cwd(), 'index.html'));
// });


app.all('/api/auth/{*any}', toNodeHandler(auth));





app.use(`/api/${API_VERSION}`, routes);



app.use(errorHandler);

export default app;

