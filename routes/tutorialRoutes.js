const express = require('express');

const tutorialController = require('../controller/tutorialController');

const router = express.Router();

router.get('/', tutorialController.getTutorials);

router.get('/:id', tutorialController.getTutorial);

router.post('/', tutorialController.postEditTutorial);

router.put('/', tutorialController.postEditTutorial);

router.delete('/:id', tutorialController.DeleteTutorials);

module.exports = router;