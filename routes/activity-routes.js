const express = require("express");
const router = express.Router();
const activity = require("../model/Activity");
const activitiesController = require("../controllers/activitiesController");

router.get("/", activitiesController.getAllActivities);
router.get("/:id", activitiesController.getById);
router.post("/", activitiesController.addActivity);
router.put("/:id", activitiesController.updateActivity);
router.delete("/:id", activitiesController.deleteActivity);

module.exports = router;
