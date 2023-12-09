const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/socials', (req, res) => {
  res.send({
    website: "https://sahin-alam-portfolio.netlify.app",
    github: "https://github.com/Ruler45"
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})