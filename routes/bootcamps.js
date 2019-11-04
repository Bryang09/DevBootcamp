const express = require("express");
const router = express.Router();

router.get("/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Showing all bootcamps" });
});

router.get("/bootcamps/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Showing bootcamps with ID ${req.params.id} `
  });
});

router.post("/bootcamps", (req, res) => {
  res.status(201).json({ success: true, msg: "Create new bootcamp" });
});

router.put("/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `UPDATE bootcamp with ID ${req.params.id} ` });
});
router.delete("/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `DELETE bootcamp with ID ${req.params.id} ` });
});

module.exports = router;
