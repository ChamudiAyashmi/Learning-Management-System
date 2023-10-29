package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.repository.StudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.util.List;
@Service
@Slf4j
public class StudentServiceImpl implements StudentService{
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    ModelMapper modelMapper;
    private final static String folderPath = "E:/ICET/Spring projects/Learning Management System/Front End/images/";
    public boolean isValidObject(Student student){
        StudentEntity map = modelMapper.map(student, StudentEntity.class);
            if (map.getFirstName()==null ||
                map.getLastName()==null ||
                map.getUserName()==null ||
                map.getPassword()==null ||
                map.getEmailAddress()==null ||
                map.getAddress()==null ||
                map.getPhoneNumber()==null ||
                map.getGender()==null ||
                map.getGuardiansName()==null ||
                map.getGuardiansAddress()==null ||
                map.getGuardiansPhoneNumber()==null || map.getGuardiansEmail()==null ||
                map.getAge() == 0) {
            return false;
       }
        return true;
    }
    @Override
    public boolean registerStudent(Student student, MultipartFile file) throws IOException {
        String filePath = folderPath + file.getOriginalFilename();
        if (!isValidObject(student)){
            return false;
        }else {
            StudentEntity map = modelMapper.map(student, StudentEntity.class);
            map.setImageName(file.getOriginalFilename());
            map.setImagePath(filePath);
            studentRepository.save(map);
            boolean existsById = studentRepository.existsById(map.getId());
            file.transferTo(new File(filePath));
            if (existsById){
                return true;
            }
        }
        return false;
    }
    @Override
    public List<StudentEntity> getAllStudents() {
        return (List<StudentEntity>) studentRepository.findAll();
    }
    @Override
    public Iterable<StudentEntity> findStudentById(Long id) {
        return studentRepository.findStudentById(id);
    }
    @Override
    public Iterable<StudentEntity> findByFirstName(String firstName) {
        return studentRepository.findByFirstName(firstName);
    }
    @Override
    public boolean deleteById(Long id) {
         studentRepository.deleteById(id);
         return findById(id);
    }
    private boolean findById(Long id){
        return studentRepository.findById(id) !=null ? true: false;
    }
    @Override
    public void updateStudent(Student student) {
        StudentEntity map = modelMapper.map(student, StudentEntity.class);
        studentRepository.save(map);
    }
}
