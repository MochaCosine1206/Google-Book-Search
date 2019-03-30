const axios = require("axios");
const router = require("express").Router();


router.get("/search", (req, res) => {
  axios
    .get("http://www.googleapis.com/books/v1/volumes?q=", req.query )
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

//   router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;