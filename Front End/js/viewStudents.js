let studentTable = document.getElementById("tbl");

fetch("http://localhost:8080/student")
.then(response => response.json())
.then(res => {
    
    let body = ``
    res.forEach(element => {
        
        body += `
          
            <div class="testmonals-col">
                   <h2>${element.firstName+" "+element.lastName}</h2>
                   <span class="span">Student Id : ${element.id}</span><br>
                   <span class="span">First Name : ${element.firstName}</span><br>
                   <span class="span">Last Name : ${element.lastName}</span><br>
                   <span class="span">Email : ${element.emailAddress}</span><br>
                   <span class="span">Address : ${element.address}</span><br>
                   <span class="span">Phone Nuber : ${element.phoneNumber}</span><br>
                   <button>Delete</button>
                   
            
                   
            </div>`;

        

    });
    studentTable.innerHTML = body;
})