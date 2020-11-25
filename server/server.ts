import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { galleriesMock } from "./mocks/galleries";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

app.get("/gallery", (req: Request, res: Response) => {
  res.send(galleriesMock);
});

app.get("/gallery/*", (req: Request, res: Response) => {
  res.send(galleriesMock[1]);
});

app.patch("/gallery", (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    response: `response ${req.body}`,
  });
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}!`);
});
