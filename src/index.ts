import { env } from './config/env';
import express from 'express';

const app = express();

const port = env.APP_PORT;

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});