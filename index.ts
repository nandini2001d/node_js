import express, { Request, Response } from "express";
import { connectDB } from "./dbConnection";
import { router } from "./routes/routes";
import { data_user } from "./Entity/data_user";


const cors = require('cors');

const app = express();
const port = 4001;

//midlwares
app.use(cors());
app.use("/", router);

//these is used for the responce return in the json from 
app.use(express.json());


const repository = connectDB.getRepository(data_user);

//chaking database connection
connectDB
  .initialize()
  .then(() => {
    console.log("Database Connect");
  })
  .catch((errer) => {
    console.log("Connection fuild" + errer);
  });

//post api
app.post("/", async (req: Request, res: Response) => {
  let data = await repository.save(req.body);
  res.json({
    test: "ok",
    data: data,
  });
});

app.get("/:id", async (req: Request, res: Response) => {
  let data = await repository.findOneBy(req.params);
  res.json({
    test: "ok",
    data: data,
  });
});

app.put("/:id", async (req: Request, res: Response) => {
  let data = await repository.update(req.params, req.body);

  res.json({
    test: "ok",
    data: data,
  });
});

app.delete("/:id", async (req: Request, res: Response) => {
  let data = await repository.delete(req.params);

  res.json({
    test: "ok",
    data: data,
  });
});

//server configuration
app.listen(port, (): void => {
  console.log("Server Start");
});
