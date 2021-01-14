const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ testing: 'commits' });
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);