const express = require('express')
const app = express()

const port = 3000
const {testRedis}=require('./controller.js')
 
const redis = require("redis"); 
const redisclient = redis.createClient(); 
  
(async () => { 
    await redisclient.connect(); 
    app.set('redisClient', redisclient);
})(); 
  
console.log("Connecting to the Redis"); 
  
redisclient.on("ready", () => { 
    console.log("Connected!"); 
    
}); 

redisclient.on("error", (err) => { 
    console.log("Error in the Connection"); 
}); 


app.get("/redis", async(req,res) => {
    
    redisclient.set("damian","duran")
    res.send('funcionando')
  });

app.get("/redisget", async(req,res) => {
    
    const message=await redisclient.get("damian")
    console.log(message)
    res.send(message)
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/testanotherfile', testRedis
)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

