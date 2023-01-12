import express from 'express'
const app = express()
const port = 3001

app.get('/simple', (req, res)=>{
    res.send('simple response')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})