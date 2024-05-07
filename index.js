const http = require('http')
const fs = require('fs')
const port = 8088
const requestHandler = (req, res) => {
    let fileName = ""

    switch (req.url) {
        case '/':
            fileName = "./index.html"
            break;
        case '/about':
            fileName = "./about.html"
            break;
        case '/contact':
            fileName = "./contact.html"
            break;
        case '/blog':
            fileName = "./blog.html"
            break;
    }
    console.log(req.url);
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.end("not found")
        } else {
            res.write(data)
            res.end()
        }
    })
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        console.log("something went wrong");
        return false
    }
    console.log(`server is handling on ${port}`)
})
