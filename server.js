const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

//Store all HTML, JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/public'));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, './public'))
});

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, console.log('Server listening on PORT ' + PORT));

