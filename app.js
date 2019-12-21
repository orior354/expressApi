const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo');

mongoose.connect('mongodb+srv://orior:p0o9q1e3@ortestcluster-ql7ic.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser:true
});
app.use(bodyParser.json());
app.use('/todo', todoRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listing on port ${port}...`));