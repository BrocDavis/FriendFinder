var friendsArray = require("../app/data/friends");

module.exports = function(app) {

  app.get("/api/friendslist", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friendslist", function(req, res) {

      friendsArray.push(req.body);
      res.json(true);
  });
}