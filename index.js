
let form =document.querySelector("#ex-form");
let selecttag =document.getElementById("selecttag").value;

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    // function sendEmail() {
    //     Email.send({
    //         Host : "smtp.mailtrap.io",
    //         Username : "5c89a1d5e243e3",
    //         Password : "fdc27e911b76fd",
    //         To : 'nishikantaray1@gmail.com',
    //         From : "540e10158c-3c9107@inbox.mailtrap.io",
    //         Subject : "Test email",
    //         Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    //     }).then(
    //       message => alert(message)
    //     );
    // }
    // sendEmail();
    console.log(selecttag);
    if(selecttag=='Personal'){
        location.href = "Personal/index.html";
    }
    if(selecttag=='Professional'){
        location.href = "Professional/index.html";
    }
    
})