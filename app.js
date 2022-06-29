const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();
module.exports = app;
app.listen(3000);

function getDaysAfterXdays() {
  const date = new Date();
  const afterXdays = addDays(date, 100);
  return `${afterXdays.getDate()}/${
    afterXdays.getMonth() + 1
  }/${afterXdays.getFullYear()}`;
}

const result = getDaysAfterXdays();

app.get("/", (request, response) => {
  response.send(result);
});
