var expr=require("express")
var app=expr()
app.use(expr.static(__dirname,{index:'gett.html'}))
app.get('/process_get',function(req,res)
{
    response={
        fname:req.query.fn,
        lname:req.query.ln

    };
    console.log(req.query)
    res.send(response)
})
app.listen(2109)