const expr=require("express")
const sess=require("express-session")
const app=expr()

app.use(sess(
        {
            resave:true,
            saveUninitialized:true,
            secret:"LJU123"
        }
    )
)
app.get("/",(req,res)=>
{
    if(req.session.page){
req.session.page++;
res.send(`this website is visited: ${req.session.page}times`)
    }
    else
    {
      req.session.page=1;
      res.send(`<h1 style=color:green>Welcom to the page </h1>`)
    }
}).listen(3456)


