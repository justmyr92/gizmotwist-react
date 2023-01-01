require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const ProductRoutes = require('./routes/product');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/products', ProductRoutes);

//connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI
).then(() => {
    console.log('connected to db');

    app.listen(process.env.PORT, () => {
        console.log('Listening on port', process.env.PORT);
    }
    );
}).catch((err) => {
    console.log('error connecting to db', err);
});


