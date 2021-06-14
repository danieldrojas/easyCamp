const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const indexRoutes = require("./routes/index");

//Routes:
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
