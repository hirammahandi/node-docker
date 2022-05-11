import { config } from 'dotenv';
import app from './app';

config();

const PORT = process.env.PORT || 3001;

const init = (): void => {
  app.listen(PORT);
  console.info(`server init on port ${PORT}`);
};

init();
