import express from "express";
import router from "./route.js";

const app = express();
app.use(express.json())
app.use(router)

app.listen(1200, () => {
  console.log("app is listinig to request on http://localhost:1200");
});


