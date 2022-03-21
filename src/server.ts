import 'dotenv/config';
import express from 'express';
import { router } from './routes';
import { logger } from './utils/Logger';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000,() => {
    logger.info(`Listening on port ${process.env.PORT}`);
});