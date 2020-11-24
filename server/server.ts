import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

app.get("/api/hello", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/api/world", (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    response: `I received your POST request. This is what you sent me: ${req.body.test}`,
  });
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}!`);
});
