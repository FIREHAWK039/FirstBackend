require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req,res) => {
    res.send("xyz1234sbb")

})

app.get('/youtube', (req,res)=>{
    res.send("porn deko daba ke")
})
app.get('/randibua', (req,res)=>{
    res.send(" aatmik ki bua ka rate: 1000 per shot")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
