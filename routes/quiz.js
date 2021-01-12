const router = require('express').Router();
const quizController = require('../controllers/quiz');


router.post('/start', quizController.saveQuizUser)
// router.get('/start', user)
router.get('/winner', quizController.showWinners)
router.post('/winner', quizController.saveQuizWinner)

module.exports = router 
