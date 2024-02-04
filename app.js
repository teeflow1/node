const http = require('http');



const server = http.createServer ((req, res) =>{

if (req.url === '/'){
res.end('Welcome home')
}

if (req.url === '/about'){
    res.end('This is the about page')
}

if(req.url === '/contact')
{
    res.end('This is the contact page')
}



    //res.write('Good Lord Man')
    //res.end()

})

server.listen(5000)