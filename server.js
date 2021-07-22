const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started at port : ${PORT}`);
});
