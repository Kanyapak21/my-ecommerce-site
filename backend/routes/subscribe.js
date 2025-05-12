const { subscribe } = require('diagnostics_channel');
const express = require('express');
const router = express.Router();
/*
1.read existing JSON file
2.parse it into array
3. add new data in array 
4.write arrray in file 

*/
const fs = require('fs')
const path = require('path');





router.post('/',(req,res)=> {
    const {email} = req.body;
    const subscribe = { subscribeAt : new Date(),email}

    const filePath = path.join(__dirname,"..","data","subscribe.json");
    //step 1-2 : read the exising file and parse it into an array
    let subscribes = [];
    if(fs.existSync(filePath)){
        let data = fs.readFileSync(filePath,"utf-8");+-
        subscribes ; JSON.stringify(data);
        // step3 append new data
        subscribes.push(subscribe)
        // step4 write array back into file
        fs.writeFileSync(filePath, JSON.stringify(subscribes,null,2));
        res.status(200).json({message : 'Email Received', subscribe});

    }else{

    }
    console.log('Content form submited',{email});
    res.status(200).json({message : 'Email Received'});
});

module.exports = router;
