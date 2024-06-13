// write an express js script to set cookies of submitted value of form

const exp=require('express')
const app=exp()
app.use(exp.static(__dirname,{index:"cookie2.html"}))
const cp=require('cookie-parser')
app.use(cp())
app.get('/next',function(req,res)
{    
res.cookie('Fname',req.query.fn);
res.cookie('Lname',req.query.ln);
res.clearCookie(Fname)
res.redirect("/admin")
})

app.get('/admin',function(req,res)
{
res.write("Welcome"+req.cookies.Fname+" "+req.cookies.Lname);
res.end();
})
app.listen(4500)


