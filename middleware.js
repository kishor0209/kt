var exp=require('express')
var app=exp()
const cb=(req,res,next)=>
    {
        console.log('initialized')
    res.set('Content-Type','text/html')        
        res.write("<strong>First</strong>")
next();
    }
    const cb1=(req,res,next)=>{
res.write("<p>Additon="+(5+5)+"</p>")
next()
    }
    app.use("/ee",cb,cb1);
    app.get("/ee",(req,res)=>
        {
        res.write("<h1>Hello Welcome to LJU</h1>")
        res.send()
    });
app.listen(3109)
