import express from 'express';
import cors from 'cors';
import { router } from './controllers/pokemonController.js';

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
