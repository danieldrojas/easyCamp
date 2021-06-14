const express = require("express");
const path = require("path");
const cors = require("cors");
const router = express.Router();

const port = process.env.PORT || 3000;
const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

const indexRoutes = require("./routes/index");

//Routes:
app.use("/", indexRoutes);
app.use(express.static(path.join(__dirname, "/public")));

// app.post("/google-api/map", (req, res) => {
//   console.log(req.body);
//   res.send("Server");
//   //   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
