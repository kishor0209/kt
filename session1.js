var expr=require("express")
var app=expr()
var es=require("express-session")
app.use(es(
    {
        secret:"kr123"
    }
))
app.use(expr.static(__dirname,{index:'session1.html'}))
app.get('/savesessionpage',function(req,res)
{
    req.session.nn=req.query.nn
    req.session.pass=req.query.pass

    res.redirect("/fetchsession")
})
app.get("/fetchsession",(req,res)=>
{
    res.send("<h1>welcome"+req.session.nn+"</h1><a href='/deletesession'>logout</a>")
})
app.get("/deletesession",(req,res)=>
    {
        req.session.destroy()
        res.redirect('/next')
    })
app.get("/next",(req,res)=>
        {
res.send("welcome" +" "+req.session.nn)
        })
app.listen(2104)