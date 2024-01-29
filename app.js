const http = require('http');



const server = http.createServer((req, res) =>{
    
    if (req.url === '/'){
        res.end('welcome to NodeJs App')
    }

    if(req.url === '/about'){
        res.end('This is the about page')
    }
    
    res.end('<h1> the page does not exist </h2>')

    //console.log(req)
    //res.write('Welcome To My First NodeJs App')
    //res.end()

})

server.listen(5000)