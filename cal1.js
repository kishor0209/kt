var expr=require("express")
var app=expr()
app.use(expr.static(__dirname,{index:'cal.html'}))
app.get('/calc',function(req,res)
{
    res.set('Content-Type','text/html')
    n1=parseInt(req.query.fno)
    n2=parseInt(req.query.sno)

    if((n1>0)&&(n2>0)){
    if(req.query.select_name=='add')
            {
                a=n1+n2
                res.write(("ADDITION IS="+a))
            }

        
      else if(req.query.select_name=='sub')
            {
                b=n1-n2
                res.write(("Subtract IS="+b))
            }

        
       else if(req.query.select_name=='mul')
            {
                c=n1*n2
                res.write(("Multi IS="+c))
            }

        
    else{
        res.write("Invalid number")
    }
    }
else{
res.write("enter the value")
}
    res.send()

})
app.listen(5555)