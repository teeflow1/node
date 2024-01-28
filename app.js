const http = require('http');



const server = http.createServer((req, res) =>{
    

    //console.log(req)
    res.write('Welcome To My First NodeJs App')
    res.end()

})

server.listen(3000)