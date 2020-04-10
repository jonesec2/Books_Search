const db = require("../models");

// Defining methods for the booksController
module.exports = {
   findAll: function (req, res) {
      db.Book
         .find(req.query)
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   },
   create: function (req, res) {
      console.log(req)
      console.log(res)
      db.Book
         .create(req.body)
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   },
   remove: function (req, res) {
      console.log("books Controller Delete")
      db.Book
         .deleteOne({ _id: req.params.id })
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   }
};
