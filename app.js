
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

const sequelize = require('./util/database');
const User = require('./models/user');
const Message = require('./models/message');

const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/messagetab');

app.use('/user', userRoutes);
app.use('/chat', chatRoutes);

app.use((req,res)=>{
    console.log('hello');
    res.status(404).send('<h1>Page Not Found </h1>');
})

User.hasMany(Message);
Message.belongsTo(User);

sequelize
    .sync()
    .then(()=>{
    app.listen(4000);
})
    .catch(err=>{
    console.log(err);
})