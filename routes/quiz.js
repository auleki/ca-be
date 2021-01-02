const router = require('express').Router();
const quizController = require('../controllers/quiz');

router.get('/start/:username', quizController.findQuizUser)
router.post('/start', quizController.saveQuizUser)
router.get('/start', quizController.showUsers)

module.exports = router 