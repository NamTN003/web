const http = require('http')
const fs = require('fs')

//config port for web deployment
const port = process.env.PORT || 3002

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile('index1.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else if (req.url === '/Hanoi') {
      fs.readFile('Hanoi.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else if (req.url === '/Hcm') {
      fs.readFile('Hcm.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else if (req.url === '/Cantho') {
      fs.readFile('Cantho.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else if (req.url === '/Danang') {
      fs.readFile('Danang.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else {
      res.write('<h1>404 - Not Found</h1>')
      res.end()
   }
})
server.listen(port, () => {
   console.log("http://localhost:" + port)
})