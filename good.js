

/*if(number > 10) {
   console.log('High number');
}
else{
    console.log('Low number')
    
}

console.log('My node app') 
*/



const name = require('./num')
const sayHi = require('./scnd')
require('./add')
//console.log(name)
//console.log(sayHi)



sayHi(name.john)
sayHi(name.peter)