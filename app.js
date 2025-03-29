const express = require('express');
const app = express();
const serviceRoutes = require('./routes/serviceRoute');
const foremanRoutes = require('./routes/foremanRoute');

app.use(express.json());

app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/foremen', foremanRoutes);


module.exports = app;