// write an express js script to define one json array of three objects having property name and age.
// sort this objects according to age and display this sorted value on  home page
var expr=require("express")
var app=expr()
const  student=[
        {
            name:"KK",
            age:23

        },
        {
            name:"JD",
            age:69
        },
        {
            name:"JK",
            age:25
        }
    ]
    app.get('/',function(req,res){
    res.set('Content-Type','text/html')
    res.send(student)

})
app.get('/sort',function(req,res){
for(let i=0;i<student.length;i++){
    for(let j=0;j<student.length;j++){
if(student[i].age>student[j].age){
    var temp;
    temp=student[j]
    student[j]=student[i]
    student[i]=temp
}
}
}
// for(k=0;k<student.length;k++){
//     res.write(student[k].name+" "+student[k].age+" ")
    
// }
// res.end()
res.send(student)
})
app.listen(3332)