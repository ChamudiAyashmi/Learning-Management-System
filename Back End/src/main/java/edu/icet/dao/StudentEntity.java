package edu.icet.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
@Table(name = "student")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
}
