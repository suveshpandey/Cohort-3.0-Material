const express = require('express');
const app = express();
let users = [
    {
        name: "suvesh",
        kidneys: [{healthy: false}]
    }
];
app.use(express.json());
app.get("/", function(req, res){
    const spKidneys = users[0].kidneys;
    const noOfKidneys = spKidneys.length;
    let noOfHealthyKideys = 0;
    for(let i = 0; i<spKidneys.length;i++){
        if(spKidneys[i].healthy){
            noOfHealthyKideys = noOfHealthyKideys+1;
        }
    }
    const noOfUnhealthyKideys = noOfKidneys - noOfHealthyKideys;

    res.json(
        {
            // spKidneys,
            noOfKidneys,
            noOfHealthyKideys,
            noOfUnhealthyKideys
        }
    )
})
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    })
    res.json({msg: "Done!"});
})
app.put("/", function(req, res){
    let noOfKidneys = users[0].kidneys.length;
    for(let i = 0; i<noOfKidneys; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json("put Done!")
})
app.delete("/", function(req, res){
    //you should return 411, if there are no unhealthy kidneys
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    if(atleastOneUnhealthyKidney == true){
        let newKidneys = [];
        for(let i = 0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({healthy: true});
            }
        }
        users[0].kidneys = newKidneys;
        res.json("delete done!");
    }
    else{
        res.status(411).json({msg: "you have no unhealthy kidneys!"})
    }
    
})

app.listen(3000);