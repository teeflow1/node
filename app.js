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
console.log('Make it happen Ayobami')
server.listen(8000) 

/*
const _ = require('lodash')

const item = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems);

console.log("Hello People")
*/



