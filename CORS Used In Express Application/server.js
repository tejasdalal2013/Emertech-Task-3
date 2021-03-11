const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

app.get('/',(req,res) => res.json({data: 'Secret data'}))

app.listen(port,() => console.log(`Example App listening at http://localhost:${port}`))