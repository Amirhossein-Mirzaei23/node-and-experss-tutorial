const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const experess =require('express');
require('dotenv').config()
// const { query } = require('express-validator');



const app=experess()

const methodOverride = require('method-override')

// validion setting

    app.use(cookieParser(process.env.COOKIE_SECRET));
    app.use(session({ 
        secret:process.env.SESSION_SECRET,
        resave:true,
        saveUninitialized:true
    }));
    app.use(flash());

  
global.config=require('./config');

app.use(experess.static(__dirname+"/public"))
app.use(experess.urlencoded({extended:false}))
app.set('view engine','ejs')
app.use(methodOverride('method'))

app.use((req,res,next)=> {
   console.log("mid1");
    next()
})

app.get('/',(req,res)=>{
    res.render('index')
})


app.use((req,res,next)=> {
 
    console.log("mid2");
    next()
})

app.use('/user',require('./routes/user.js'))

// app.use('/users',require('./routes/user.js'))

app.listen(config.port,()=> { console.log(`server is runing on port ${config.port}`) })