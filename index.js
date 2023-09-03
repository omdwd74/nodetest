const jokes =require('give-me-a-joke');
const express = require('express');
const app = express();

const colors =require('colors')
// console.dir(jokes);
// console.log(jokes);
jokes.getRandomDadJoke((data)=>{
    console.log(data.rainbow);

})
app.get('/home',(req,res)=>{

	res.send('home');
})
app.listen(3000);

