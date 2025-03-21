const express = require('express');
const app = express();
const serviceRoutes = require('./routes/serviceRoute');

app.use(express.json());

app.use('/api/v1/services', serviceRoutes);



module.exports = app;