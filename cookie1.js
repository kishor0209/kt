const exp=require('express')
const app=exp()
const cp=require('cookie-parser')
app.use(cp())
app.get('/cookie',function(req,res)
{
res.cookie('Name','xyz');
res.cookie('ID','1',{expires:new Date(Date.now()+10000)});
res.cookie('email','kishorrathore0209@gmail.com');
res.send(req.cookies);
}).listen(1212)


