const router = require('express').Router();
const quizController = require('../controllers/quiz');

router.post('/start', quizController.saveQuizUser)
router.get('/start', quizController.showUsers)
router.post('/start/:username', quizController.findQuizUser)
module.exports = router 
