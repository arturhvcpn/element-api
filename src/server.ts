import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './routes';
import { logger } from './utils/Logger';
import { serve, setup } from 'swagger-ui-express';
import swaggerJson from '../swagger.json';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/swagger', serve, setup(swaggerJson));
app.use(router);

app.listen(process.env.PORT,() => {
    logger.info(`Listening on port ${process.env.PORT}`);
});