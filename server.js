const express = require("express");
const app = express();
const data = require("./database/data");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/members", (req, res) => {
  res.render("member.hbs", {
    data,
  });
});

app.post("/join", (req, res) => {
  let obj = {
    name: req.body.name,
    email: req.body.email,
    post: req.body.post,
  };
  data.memberList.profiles.push(obj);
  console.log("====================");
  console.log(data.memberList);
  console.log("====================");

  res.send(data);
  // res.redirect("/");
});
app.listen(5000, () => {
  console.log("I love you 5000");
});
