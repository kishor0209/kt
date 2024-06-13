// write an express js script to set cookies of submitted value of form

const exp=require('express')
const app=exp()
app.use(exp.static(__dirname,{index:"cookie_ex.html"}))
app.use(exp.urlencoded())
const cp=require('cookie-parser')
app.use(cp())
app.post('/Submit-feedback',function(req,res)
{    
    res.set('Content-Type','text/html')

const{name,email,message,ratings}=req.body
const feedback={name,email,message,ratings}
res.cookie('FB',feedback,{maxAge:10000});
res.send("<a href=/feedback_detail>Show feedback</a>")
})

app.get('/feedback_detail',function(req,res)
{
const feedback=req.cookies.FB
    if(feedback)
{
    res.send(`<h1>feedback_details</h1><p><strong>Name:</strong>${feedback.name}</p>`)
}
})
app.listen(2121)


