const express = require('express');
const connectDb = require('./db');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors())
connectDb();


app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
