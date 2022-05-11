/* eslint-disable @typescript-eslint/naming-convention */
import express, { Response } from 'express';
const app = express();

const staticDir =
  process.env.NODE_ENV?.trim() === 'develop' ? 'src/public' : 'public';

app.use(express.static(staticDir));

app.get('/', (_, res: Response) => res.render('index'));
app.get('/ping', (_, res: Response) => res.send('pong'));

export default app;
