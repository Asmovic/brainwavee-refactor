const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/public'));

//Store all HTML files in view folder.
app.use(express.static(__dirname + '/views'));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, './views'))
})
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, console.log('Server listening on PORT ' + PORT));

