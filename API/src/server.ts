import express, { Request, Response } from "express";
import database from "./database";
import todo_list_routes from "./handlers/todo_list_routes";

const app: express.Application = express();
const port: string = "3000";

//so any website can use this API and not get blocked by CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//so we can read values from body
app.use(express.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Server is working ✔!");
});

todo_list_routes(app);

app.listen(port, function () {
  console.log(`starting app on: http://localhost:${port}`);
});

const a: database = database.getInstance();
const b: database = database.getInstance();

if (a == b) {
  console.log("both instance euqal");
} else {
  console.log("instance are not equal");
}
