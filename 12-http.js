const http = require('http')

//req reps the incoming request
//res is what we're sending back
const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end("Our short history")
    }
    res.end(
        `
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href="/">back home</a>
        `   
    )
})

server.listen(5000)