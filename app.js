
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const sequelize = require('./util/database');
const userRoutes = require('./routes/user');

app.use('/user', userRoutes);

app.use((req,res)=>{
    console.log('hello');
    res.status(404).send('<h1>Page Not Found </h1>');
})

sequelize
    .sync()
    .then(()=>{
    app.listen(4000);
})
    .catch(err=>{
    console.log(err);
})