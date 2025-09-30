//import express
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

//init app
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//define port
const port = 3000;

//route
app.get("/", (req, res) => {
  res.send("kenapa sihngentooot");
});

//start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
