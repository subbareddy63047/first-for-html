const express = require("express");
const app = express();

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirnames });
});
app.listen(3000);
module.exports = app;
