import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From elo" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send({
    response: `I received your POST request. This is what you sent me: ${req.body.test}`,
  });
});

app.listen(port, () => console.log(`server listening on port ${port}!`));
