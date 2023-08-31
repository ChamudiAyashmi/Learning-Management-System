const username = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btn-login");

btnLogin. addEventListener("click",()=>{
    let tempUserName = userName.value;
    let tempPassword = password.value;

    fetch(`http://localhost:8080/admin/${tempUserName}/${tempPassword}`)
    .then(response=> response.json())
    .then(res=>{
        if(res==true){
            // Swal.fire(
            //     'Good job!',
            //     'You clicked the button!',
            //     'success'
            //   )
            alert("Success");
            window.open("../dashboard.html","_top");
    
         
         
            tempUserName.value="";
            tempPassword.value="";

        }else{
            alert("Login Failed");
            tempUserName.value="";
            tempPassword.value="";
        }
    })
})