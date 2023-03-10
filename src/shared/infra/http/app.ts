import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(routes);

/* eslint-disable-next-line no-unused-vars */
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: err.id, message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

export { app };
