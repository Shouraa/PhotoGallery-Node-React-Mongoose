const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/item");

// @route GET api/items
// @desc Get All Items
// @access Public

router.get("/", (req, res) => {
  Item.find().then(items => res.json(items));
});

// @route POST api/items
// @desc Create an Item
// @access Public

router.post("/", (req, res) => {
  const newItem = new Item({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public

router.delete("/:id", (req, res) => {
  item
    .findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

// router.delete("/:id", (req, res) => {
//   item.findByIdAndRemove(req.param.id, (err, result) => {
//     if (err || !result) {
//       res.send({ error: "some error happened" });
//     } else {
//       res.send({ error: "" });
//     }
//   });
// });
