const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.query("SELECT * FROM test", (req, res) => {
    if (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan saat mengambil data dari database");
    } else {
      // hasildari database mysql
      const responseData = response();
      responseData.payload.status_code = 200;
      responseData.payload.datas = result;
      res.json(responseData);
    }
  });
});

app.get("/hello", (req, res) => {
  console.log({ urlParam: req.query });
  res.send("hello world");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("login berhasil");
});

app.put("/username", (req, res) => {
  console.log({ upadateData: req.body });
  res.send("upadate berhasil");
});

app.listen(port, () => {
  console.log(`Example listening on port ${port}`);
});
