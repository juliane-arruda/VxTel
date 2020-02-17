const express = require('express');
const calculator = require('../calculator/index');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Calculadora'
  });
});

router.post('/result', (req, res) => {
  const {
    originDDD,
    destinyDDD,
    time,
    faleMais
  } = req.body;

  const result = calculator(originDDD, destinyDDD, +time, +faleMais);

  res.render('result', {result});

})

module.exports = router;