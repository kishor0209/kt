<html>
     <body>
        <form action="/process_post" method="post">
            <label>Firstname:</label>
            <input type="text" name="fn" placeholder="Firstname"><br><br>
            <label>Lastname:</label>
            <input type="text" name="ln" placeholder="Lasttname"><br><br>
            <input type="submit">
        </form>
    
</body></html>
var expr=require("express")
var app=expr()
app.use(expr.static(__dirname,{index:'post.html'}))
app.use(expr.urlencoded())
app.post('/process_post',function(req,res)
{
    res.send(req.body)
})
app.listen(2100)
