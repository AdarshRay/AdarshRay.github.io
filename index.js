
let form =document.querySelector("#ex-form");


form.addEventListener('submit',(event)=>{
    event.preventDefault();
   let selecttag =document.getElementById("selecttag").value;
    console.log(selecttag);
    if(selecttag=='Personal'){
        location.href = "Personal/index.html";
    }
    if(selecttag=='Professional'){
        location.href = "Professional/index.html";
    }
    
})
