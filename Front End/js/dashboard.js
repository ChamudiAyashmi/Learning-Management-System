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
                    <td><button class="btn" id="btnId">${element.id}</button></td>
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

// Add an event listener to the table itself and use event delegation to capture button clicks
studentTable.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonValue = event.target.textContent; // Get the text inside the button

        // Perform a fetch request when a button is clicked
        fetch(`http://localhost:8080/student/${buttonValue}`)
            .then(response => response.json())
            .then(result => {
                let body = ``
                result.forEach(element => {

                    body += `
                      
                    <div class="profile">
                    <div class="title">
                        <h2 class="profile-h2">Profile</h2>
    
                    </div>
                    <div class="content">
                        <div class="image-div">
                            <div class="image" style = "background-image: url('images/${element.imageName}')">
                            </div>
                            <h2 class="name">${element.firstName}</h2>
                            <input type="button" class="btnDelete" value="Delete" id="btnDelete" onclick="deleteStudent(${element.id})">
                            </div>
                        <div class="right">
                            <div class="div1">
                                <h3>Personal Details</h3>
                            </div>
                            <div class="div2">
                                <div class="box">
                                    <label for="">Student ID : S00${element.id}</label>
                                </div>
                                <div class="box">
                                    <label for="">First Name : ${element.firstName}</label>
                                </div>
                                <div class="box">
                                    <label for="">Gender : ${element.gender}</label>
                                </div>
                                <div class="box">
                                    <label for="">Last Name : ${element.lastName}</label>
                                </div>
                                <div class="box">
                                    <label for="">Age : ${element.age}</label>
                                </div>
                                <div class="box">
                                    <label for="">Address : ${element.address}</label>
                                </div>
                            </div>
                            <div class="div3">
                                <h3>Contact Details</h3>
                            </div>
                            <div class="div4">
                                <div class="box">
                                    <label for="">Email Address : ${element.emailAddress}</label>
                                </div>
                                <div class="box">
                                    <label for="">Phone Number : ${element.phoneNumber}</label>
                                </div>
                            </div>
                            <div class="div5">
                                <h3>Guardians Details</h3>
                            </div>
                            <div class="div6">
                                <div class="box">
                                    <label for="">Name : ${element.guardiansName}</label>
                                </div>
                                <div class="box">
                                    <label for="">Address : ${element.guardiansAddress}</label>
                                </div>
                                <div class="box">
                                    <label for="">Phone Number : ${element.guardiansPhoneNumber}</label>
                                </div>
                                <div class="box">
                                    <label for="">Email Address : ${element.guardiansEmail}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>`;
                });
                studentTable.innerHTML = body;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});

function search() {
    const srarchBarVal = document.getElementById("searchBar").value;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`http://localhost:8080/student/byFirstName/${srarchBarVal}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            let body = ``
            result.forEach(element => {

                body += `
                  
                <div class="profile">
                <div class="title">
                    <h2 class="profile-h2">Profile</h2>

                </div>
                <div class="content">
                    <div class="image-div">
                    <div class="image" style = "background-image: url('images/${element.imageName}')">
                    </div>
                        <h2 class="name">${element.firstName}</h2>
                        <input type="button" class="btnDelete" value="Delete" id="btnDelete" onclick="deleteStudent(${element.id})">

                    </div>

                    <div class="right">
                        <div class="div1">
                            <h3>Personal Details</h3>
                        </div>
                        <div class="div2">
                            <div class="box">
                                <label for="">Student ID : S00${element.id}</label>
                            </div>
                            <div class="box">
                                <label for="">First Name : ${element.firstName}</label>
                            </div>
                            <div class="box">
                                <label for="">Gender : ${element.gender}</label>
                            </div>
                            <div class="box">
                                <label for="">Last Name : ${element.lastName}</label>
                            </div>
                            <div class="box">
                                <label for="">Age : ${element.age}</label>
                            </div>
                            <div class="box">
                                <label for="">Address : ${element.address}</label>
                            </div>
                        </div>
                        <div class="div3">
                            <h3>Contact Details</h3>
                        </div>
                        <div class="div4">
                            <div class="box">
                                <label for="">Email Address : ${element.emailAddress}</label>
                            </div>
                            <div class="box">
                                <label for="">Phone Number : ${element.phoneNumber}</label>
                            </div>
                        </div>
                        <div class="div5">
                            <h3>Guardians Details</h3>
                        </div>
                        <div class="div6">
                            <div class="box">
                                <label for="">Name : ${element.guardiansName}</label>
                            </div>
                            <div class="box">
                                <label for="">Address : ${element.guardiansAddress}</label>
                            </div>
                            <div class="box">
                                <label for="">Phone Number : ${element.guardiansPhoneNumber}</label>
                            </div>
                            <div class="box">
                                <label for="">Email Address : ${element.guardiansEmail}</label>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>`;
            });
            studentTable.innerHTML = body;

        })
        .catch(error => console.log('error', error));
}

function deleteStudent(id) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(`http://localhost:8080/student/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
    alert("Delete Successfully");
    window.open("../dashboard.html", "_top")
        .catch(error => console.log('error', error));
}
