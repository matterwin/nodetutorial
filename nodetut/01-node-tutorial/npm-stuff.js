// npm - global command, comes with node
// npm --v
// or 
// npm --version

// local dependecy - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important infor about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello people")

//nodemon simply keeps updating server continuously without
//having us to manually restart
//prof suggests to use something more serious like mpm2 or something