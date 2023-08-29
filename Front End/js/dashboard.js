let studentTable = document.getElementById("tbl");

fetch("http://localhost:8080/student")
.then(response => response.json())
.then(res => {

    let tblBody = `
                    <tr>
                    <th>Student Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    </tr>`
    res.forEach(element => {
        
        tblBody += `<tr>
                    <td><button>${element.id}</button></td>
                    
                    <td>${element.firstName}</td>
                    <td>${element.lastName}</td>
                    
                    
                    <td>${element.emailAddress}</td>
                    <td>${element.age}</td>
                    <td>${element.address}</td>
                    <td>${element.phoneNumber}</td>
                    </tr>`;

    });
    studentTable.innerHTML = tblBody;
})