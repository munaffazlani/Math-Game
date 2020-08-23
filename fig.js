var figlet = require("figlet");

figlet.text(
  "FARHAN",
  {
    width: 15,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);