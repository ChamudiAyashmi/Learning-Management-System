const adminUsername = document.getElementById("userName");
const adminPassword = document.getElementById("password");
const adminEmail = document.getElementById("email");
const btnCreate = document.getElementById("btn-create");

btnCreate.addEventListener("click",()=>{

    let admin={
        "username":adminUsername.value,
        "password":adminPassword.value,
        "email":adminEmail.value
    }

    fetch('http://localhost:8080/admin',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(admin)
    })
    .then(response => response.json())
    .then(response => console.log(stringify(response)))

    adminUsername.value='';
    adminPassword.value='';
    adminEmail.value='';


    window.open("../index.html","_top");
})