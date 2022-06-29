import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});

export default app;
