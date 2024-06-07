var expr=require("express")
var app=expr()
app.get('/',function(req,res){
    res.set('Content-Type','text/html')
    res.send('<h1>Hello <br> Kishor </h1>')

})
app.get('/about',function(req,res){
    res.set('Content-Type','text/html')
    res.send("<h2>This is about page</h2>")
})

app.listen(5554)