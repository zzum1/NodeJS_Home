const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config();
const port = process.env.PORT

const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => {
    console.log('MongoDB running');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
  });