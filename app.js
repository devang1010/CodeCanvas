const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb+srv://devangt101003:devang1010@cluster0.uxewgrt.mongodb.net/");

const userSchema = mongoose.Schema({
      full_name: String,
      Email: String,
      userPassword: String,
})

const User = mongoose.model("User", userSchema);

let heading;
let email;
let Name;
let Password;

app.get('/', function(req, res) {
    res.render('homepage');
    console.log("Running!");
})

app.get('/index', function(req, res) {
    res.render('index', {File_name: heading});
})

app.get('/login', function(req, res){
    res.render('login');
})

app.get('/sign_up', async function(req, res){
    res.render('sign_up');
})

app.post('/sign_up', async function(req, res){
    const user = new User({
        full_name: req.body.user_name,
        Email: req.body.user_email,
        userPassword: req.body.user_password
    })
    console.log(user)
    user.save()
    res.redirect('/')
})

app.get('/secondPage', function(req, res){
    res.render('secondPage');
})

app.post('/index', function(req, res){
    heading = req.body.Filename;
    console.log(heading);
    res.redirect('/index');
})

app.post('/', function(req, res){
    email = req.body.emailInput;
    console.log(email);
    res.redirect('/');
})

app.post('/login', function(req, res){
    Name = req.body.userName;
    Password = req.body.userPassword;
    console.log(Name);
    console.log(Password);
    res.redirect('/');
})

app.listen(3000);

    