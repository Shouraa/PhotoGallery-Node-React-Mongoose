const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "images/" });

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

router.post("/", upload.single("studentImg"), (req, res) => {
  const newItem = new Item(req.body);
  console.log(req.body);

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

//router.get("/import", (req, res) => {
//   Item.insertMany([

//   ]).then(items => res.json(items));
// });
