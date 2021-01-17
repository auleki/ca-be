const router = require('express').Router();
const quizController = require('../controllers/quiz');


router.post('/save-user', quizController.saveQuizUser)
router.get('/winner', quizController.showWinners)
router.post('/winner', quizController.saveQuizWinner)

module.exports = router 
