const express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/survey", function(req,res){
//     res.sendFile(path.join(__dirname, "survey.html"))
// });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });