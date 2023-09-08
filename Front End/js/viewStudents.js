let studentTable = document.getElementById("tbl");
let profile = document.getElementById("profile");

function loadProfile() {
    fetch("http://localhost:8080/student")
        .then(response => response.json())
        .then(res => {

            let body = ``
            res.forEach(element => {

                body += `
              
                <div class="testmonals-col">
                       <h2>${element.firstName + " " + element.lastName}</h2>
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

loadProfile();

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
                        <div class="image"></div>
                        <h2 class="name">${element.firstName}</h2>
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
