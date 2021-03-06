import express, { Request, Response } from 'express';

import { testFunction } from '../handler';

const test = express.Router();

test.get('/test', async (req: Request, res: Response, next) => {
  try {
    const response = await testFunction();

    res.json(response);
  } catch (error) {
    next(error);
  }
});

export = test;
