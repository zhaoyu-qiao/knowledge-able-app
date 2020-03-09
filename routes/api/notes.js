const router = require("express").Router();
const notesController = require("../../controllers/notesController");

// Matches with "/api/notes"
router
  .route("/")
  .get(notesController.findAll)
  .post(notesController.create);

// Matches with "/api/notes/:id"
router
  .route("/:id")
  .get(notesController.findById)
  .put(notesController.update)
  .post(notesController.create)
  .delete(notesController.remove);

// Matches with "/api/notes/:username"
router
  .route("/:username")
  .get(notesController.findByUsername)
  .put(notesController.update)
  .post(notesController.create)
  .delete(notesController.remove);

module.exports = router;
