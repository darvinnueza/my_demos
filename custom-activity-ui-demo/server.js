const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/execute', (req, res) => {
    console.log('EXECUTE:', req.body);
    res.send({ status: 'ok' });
});

app.post('/save', (req, res) => res.send({}));
app.post('/publish', (req, res) => res.send({}));
app.post('/validate', (req, res) => res.send({}));

app.listen(port, () => {
    console.log(`Custom Activity UI demo running at http://localhost:${port}`);
});