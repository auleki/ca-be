const router = require('express').Router();
const quizController = require('../controllers/quiz');

router.post('/start', quizController.saveQuizUser)
// router.get('/start', user)


module.exports = router 
