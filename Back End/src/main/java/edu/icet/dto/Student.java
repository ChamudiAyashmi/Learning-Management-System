package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Student {
    private Long id;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private String emailAddress;
    private int age;
    private String address;
    private String phoneNumber;
    private String gender;
    private String guardiansName;
    private String guardiansAddress;
    private String guardiansPhoneNumber;
    private String guardiansEmail;
    private String imageName;
    private String imagePath;

    public void setFirstName(String firstName) {
        if (firstName == null || firstName.isBlank()) {
            return;
        }
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        if (lastName == null || lastName.isBlank()) {
            return;
        }
        this.lastName = lastName;
    }

    public void setUserName(String userName) {
        if (userName == null || userName.isBlank()) {
            return;
        }
        this.userName = userName;
    }

    public void setPassword(String password) {
        if (password == null || password.isBlank()) {
            return;
        }
        this.password = password;
    }
    public void setAge(int age) {
        if (age == 0 || age < 10 || age > 55) {
            return;
        }
        this.age = age;
    }

    public void setEmailAddress(String emailAddress) {
        if (emailAddress == null || emailAddress.isBlank()) {
            return;
        }
        this.emailAddress = emailAddress;
    }
    public void setAddress(String address) {
        if (address == null || address.isBlank()) {
            return;
        }
        this.address = address;
    }
    public void setPhoneNumber(String phoneNumber) {
        if (phoneNumber == null || phoneNumber.isBlank() || phoneNumber.length() != 10 || !phoneNumber.startsWith("0")) {
            return;
        }
        this.phoneNumber = phoneNumber;
    }
    public void setGender(String gender) {
        if (gender == null || gender.isBlank()) {
            return;
        }
        this.gender = gender;
    }

    public void setGuardiansName(String guardiansName) {
        if (guardiansName == null || guardiansName.isBlank()) {
            return;
        }
        this.guardiansName = guardiansName;
    }

    public void setGuardiansAddress(String guardiansAddress) {
        if (guardiansAddress == null || guardiansAddress.isBlank()) {
            return;
        }
        this.guardiansAddress = guardiansAddress;
    }

    public void setGuardiansPhoneNumber(String guardiansPhoneNumber) {
        if (guardiansPhoneNumber == null || guardiansPhoneNumber.isBlank()) {
            return;
        }
        this.guardiansPhoneNumber = guardiansPhoneNumber;
    }

    public void setGuardiansEmail(String guardiansEmail) {
        if (guardiansEmail == null || guardiansEmail.isBlank()) {
            return;
        }
        this.guardiansEmail = guardiansEmail;
    }
}
