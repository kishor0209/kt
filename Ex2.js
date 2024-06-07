var expr=require("express")
var app=expr()
app.get('/',function(req,res){
    res.set('Content-Type','text/html')
    res.send('<h1>Hello World</h1>')
})
app.listen(2233)