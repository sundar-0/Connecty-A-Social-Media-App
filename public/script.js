document.getElementById("myform").onsubmit =(e)=>{
      e.preventDefault();
        const url = "http://localhost:3000/post";
        var data = new URLSearchParams();
         for(const pair of new FormData(e.target)){
            // console.log(pair)
           data.append(pair[0],pair[1])
         }

        fetch(url,{
            method:"post",
            body:data,
           
        }).then(res=>res.json())
        .then(res2 => {
          console.log(res2);
          alert('Your Post was submitted');
          location.reload();
        }); 
     
    }
    function deleteme(post){
         const url="http://localhost:3000/delete/"+post.id;
         fetch(url,{
           method:"delete"
         }).then(res=>res.json())
         .then(json=>
         {
           alert('This post was removed Successfully');
           console.log(json)
           location.reload();
           })
         .catch(err=>console.error(err))

        }
