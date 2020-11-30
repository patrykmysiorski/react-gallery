import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { galleriesMock } from "./mocks/galleries";
import { commentMock } from "./mocks/comment";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

app.get("/gallery", (req: Request, res: Response) => {
  res.send(galleriesMock);
});

app.get("/gallery/*", (req: Request, res: Response) => {
  res.send(galleriesMock[0]);
});

app.patch("/gallery", (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    response: `response ${req.body}`,
  });
});

app.post("/addComment", (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    ...commentMock,
    userId: req.body.userId,
    content: req.body.content,
    createdAt: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}!`);
});
