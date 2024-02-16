/*const http = require('http');



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
console.log('Make it happen Temitope')
server.listen(5000)


const _ = require('lodash')

const item = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems);

console.log("Hello People")
*/





const http = require('http');

const good = http.createServer((req, res) =>{

    if(req.url === '/home'){
    res.end('Good lord')}

    if (req.url === '/about'){
        res.end('This is the about page')
    }
    if (req.url === '/contact'){
        res.end('This is the contact page')
    }

})

good.listen(5000)