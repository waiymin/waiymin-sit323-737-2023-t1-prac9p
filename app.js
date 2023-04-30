const express = require('express');
const app = express();
const port = 8080;

app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input parameters.');
  } else {
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
  }
});

app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input parameters.');
  } else {
    const difference = num1 - num2;
    res.send(`The difference between ${num1} and ${num2} is ${difference}.`);
  }
});

app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input parameters.');
  } else {
    const product = num1 * num2;
    res.send(`The multiplication of ${num1} and ${num2} is ${product}.`);
  }
});

app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input parameters.');
  } else if (num2 === 0) {
    res.status(400).send('Cannot divide by zero.');
  } else {
    const quotient = num1 / num2;
    res.send(`${num1} divided by ${num2} is ${quotient}.`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
