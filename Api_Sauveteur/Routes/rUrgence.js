const express = require("express");
const router = express.Router();
const UrgenceControl = require("../Controllers/cUrgence");
const auth = require("../middleware/auth");

router.get("/", auth, UrgenceControl.getAllUrgence);
router.post("/", auth, UrgenceControl.createUrgence);
router.put("/:id", auth, UrgenceControl.modifyUrgence);
router.delete("/:id", auth, UrgenceControl.deleteUrgence);

module.exports = router;
