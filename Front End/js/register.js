const btnRegister = document.getElementById("buttonRegister");


btnRegister.addEventListener("click", () => {
    const firstName = document.getElementById("txtFName");
    const lastName = document.getElementById("txtLName");
    const userName = document.getElementById("txtUserName");
    const password = document.getElementById("txtPassword");
    const email = document.getElementById("txtEmail");
    const age = document.getElementById("txtAge");
    const address = document.getElementById("txtAddress");
    const phoneNumber = document.getElementById("txtPhone");
    const gender = document.getElementsByName("gender");
    const guardiansName = document.getElementById("txtGuardiansName");
    const guardiansAddress = document.getElementById("txtGuardiansPhone");
    const guardiansPhone = document.getElementById("txtGuardiansAddress");
    const guardiansEmail = document.getElementById("txtGuardiansEmail");
    const image = document.getElementById("image");


    let selectGender;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectGender = gender[i].value;
        }
    }

    const formData = new FormData();

    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);
    formData.append("userName", userName.value);
    formData.append("password", password.value);
    formData.append("emailAddress", email.value);
    formData.append("age", age.value);
    formData.append("address", address.value);
    formData.append("phoneNumber", phoneNumber.value);
    formData.append("gender", selectGender);
    formData.append("guardiansName", guardiansName.value);
    formData.append("guardiansAddress", guardiansAddress.value);
    formData.append("guardiansPhoneNumber", guardiansPhone.value);
    formData.append("guardiansEmail", guardiansEmail.value);
    formData.append("file", image.files[0]);






    //     let student = {
    //         "firstName" : firstName.value,
    //         "lastName" : lastName.value,
    //         "userName" : userName.value,
    //         "password" : password.value,
    //         "emailAddress" : email.value,
    //         "age" : age.value,
    //         "address" : address.value,
    //         "phoneNumber" : phoneNumber.value,
    //         "gender" : selectGender,
    //         "guardiansName":guardiansName.value,
    //         "guardiansAddress" : guardiansAddress.value,
    //         "guardiansPhoneNumber" : guardiansPhone.value,
    //         "guardiansEmail" : guardiansEmail.value
    //     }
    //    let studentJSOBJ= JSON.stringify(student);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'POST',
       
        body: formData,
       
    };

    fetch("http://localhost:8080/student", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    if (firstName.value == "" |
        lastName.value == "" |
        userName.value == "" |
        password.value == "" |
        email.value == "" |
        age.value == "" |
        address.value == "" |
        phoneNumber.value == "" |
        gender.value == "" |
        guardiansName.value == "" |
        guardiansAddress.value == "" |
        guardiansPhone.value == "" |
        guardiansEmail.value == "") {
        alert("Registered Failed");
    } else {
        alert("Registered Success");
        window.open("./dashboard.html", "_top")

    }
})
    .catch(error => {

    })