let studentTable = document.getElementById("tbl");

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

// const btnDelete = document.getElementById("btnDelete");

// btnDelete. addEventListener("click",()=>{
//     fetch()
// })