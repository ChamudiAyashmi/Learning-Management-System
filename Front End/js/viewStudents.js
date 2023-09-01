let studentTable = document.getElementById("tbl");
let profile = document.getElementById("profile");

function loadeProfile(){
    fetch("http://localhost:8080/student")
    .then(response => response.json())
    .then(res => {
        
        let body = ``
        res.forEach(element => {
            
            body += `
              
                <div class="testmonals-col">
                       <h2>${element.firstName+" "+element.lastName}</h2>
                        <div class="span"><span>Student Id : S00${element.id}</span><br></div>
                        <div class="span"><span>First Name : ${element.firstName}</span><br></div>
                        <div class="span"><span>Last Name : ${element.lastName}</span><br></div>
                        <div class="span"> <span>Email : ${element.emailAddress}</span><br></div>
                        <div class="span"><span>Address : ${element.address}</span><br></div>
                        <div class="span"><span>Phone Nuber : ${element.phoneNumber}</span><br></div>
                        <button id="btnDelete">Delete</button>
                </div>`;
        });
        studentTable.innerHTML = body;
    })
    

}

loadeProfile();

function search(){
    const srarchBarVal = document.getElementById("searchBar").value;
    

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:8080/student/byFirstName/${srarchBarVal}`, requestOptions)
        .then(response => response.json())
        .then(result =>{
            let body = ``
            result.forEach(element => {
                
                body += `
                  
                    <div class="testmonals-col">
                           <h2>${element.firstName+" "+element.lastName}</h2>
                            <div class="span"><span>Student Id : S00${element.id}</span><br></div>
                            <div class="span"><span>First Name : ${element.firstName}</span><br></div>
                            <div class="span"><span>Last Name : ${element.lastName}</span><br></div>
                            <div class="span"> <span>Email : ${element.emailAddress}</span><br></div>
                            <div class="span"><span>Address : ${element.address}</span><br></div>
                            <div class="span"><span>Phone Nuber : ${element.phoneNumber}</span><br></div>
                            <button id="btnDelete">Delete</button>
                    </div>`;
            });
            studentTable.innerHTML = body;

        })
        .catch(error => console.log('error', error));

}
