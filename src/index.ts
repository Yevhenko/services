import { env } from './config/env';
import 'reflect-metadata';

import express from 'express';

import { createConnection } from 'typeorm';
// import { User } from './db/entity/User';

const app = express();

const port = env.APP_PORT;

createConnection()
  .then(async (connection) => {
    console.log(connection);

    app.listen(port, () => {
      return console.log(`Server is listening on ${port}`);
    });
  })
  .catch((error) => console.error(error));
