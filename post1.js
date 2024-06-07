var expr=require("express")
var app=expr()
app.use(expr.static(__dirname,{index:'post.html'}))
app.use(expr.urlencoded())
app.post('/process_post',function(req,res)
{
    res.send(req.body)
})
app.listen(2100)




