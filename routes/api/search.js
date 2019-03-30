const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router.get("/search", (req, res) => {
  axios
    .get("http://www.googleapis.com/books/v1/volumes?q=", req.query )
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

  router.route("/:id")
  .delete(booksController.remove);

module.exports = router;