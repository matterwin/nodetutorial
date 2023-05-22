const express = require('express');
const app = express();
let { people } = require('./data')

//static assests
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json());

app.get('/api/people', (req,res)=>{
    res.status(200).json({ success: true, person: name })
})

app.post('/api/people',(req,res)=>{
    const {name}=req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'pls provide name value'})        
    }
    res.status(200).json('Please Provide Credentials')
})

app.listen(5000,()=>{
    console.log("connected")
})