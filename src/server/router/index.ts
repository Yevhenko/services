import express from 'express';

import { errorHandler } from '../handler';
import test from './test';

const router = express.Router();

router.use(test);
router.use(errorHandler);

export = router;
