"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
var port = process.env.PORT || 3001;
app.get("/api/hello", function (req, res) {
    res.send({ express: "Hello From elo" });
});
app.post("/api/world", function (req, res) {
    console.log(req.body);
    res.send({
        response: "I received your POST request. This is what you sent me: " + req.body.test,
    });
});
app.listen(port, function () { return console.log("server listening on port " + port + "!"); });
