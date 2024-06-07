var expr=require("express")
var app=expr()
app.get('/user/:useried/test/:tsetv',function(req,res){
res.send(req.params)
})
app.listen(2221)