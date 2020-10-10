const path=require('path');
const data1={
    title:'Connecty',
    msg:''
}
const data2={
    title:'About Us',
    msg:'About Us!!'
}
var post={}

module.exports=function(app){
    app.get('/home',(req,res)=>{
        res.sendFile(path.join(__dirname+'/'+'index.html'));
    })
    app.get('/',(req,res)=>{
        res.render('index',{data:data1,post:post});
    })
    app.get('/aboutus',(req,res)=>{
        res.render('about',{data:data2});
    })
    app.post('/post',(req,res)=>{
      username=req.body.userName;
      usertext=req.body.userText;
      if(username!==''&&usertext!=='')
       post[username]=usertext;
       res.send(post);
      //res.render('post',{data:data3})
       })
    app.delete('/delete/:id',(req,res)=>{
        id=req.params.id
        delete post[id];
        res.send(post)
    })
}