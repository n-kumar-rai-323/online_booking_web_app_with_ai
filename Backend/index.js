const app = require("express")
const http = require("http")
const server = http.createServer(app)

const port = 5001;
server.listen(port,"localhost",(err)=>{
    if(!err){
        console.log(`Server running ${port}`)
        console.log("Please press CTRL + C to disconnect server.")
    }
    else{
        console.log(`error occured ${err}`)
    }
})

