const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  console.log(req);
  //   res.end("Server");
  //   res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
