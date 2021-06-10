const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("easyCamp from server!");
});

app.listen(port, () => {
  console.log(`Listening on port change ${port}`);

});
