const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});
app.use("/",function(req,res){
    var W=Number(req.body.W);
    var H=Number(req.body.H);
    var B=(W/(H*H));
    res.send("The BMI is "+B);


});

app.listen(3001,function(){
    console.log("server started at 3001");
})
