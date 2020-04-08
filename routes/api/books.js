const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/saved")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"

module.exports = router;
                                      