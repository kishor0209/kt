var expr=require("express")
var app=expr()
app.use(expr.static(__dirname,{index:'subs122.html'}))
app.get('/proces_get',function(req,res,next)
{
    res.set('Content-Type','text/html')        

    // response={
    //     Name:req.query.name,
    //     Email:req.query.email

    // };
    console.log(req.query)
    res.write("welcome"+" "+req.query.name+"<br>")
    res.write("Your Email id is "+" "+ req.query.email+"<br>")
next()
})
app.get("/proces_get",(req,res)=>{
    if (req.query.cc=="on"){
        res.write("<br>"+"Thank you for the subscription"+"<br>")
        res.write("<a href='/'>subscribed</a>"+"<br>")
    }
    else{
res.write("<br>"+"Please Subscribe")
    }
    res.send()
})
app.listen(2200)