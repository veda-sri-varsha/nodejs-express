const express = require('express');
const app = express();

app.use((req,res) => {
    res.send("Hello From Server!");
})

app.listen(7000,()=>{
    console.log("Server is running on port 7000");
})