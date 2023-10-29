package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

public interface StudentService {
    boolean registerStudent(Student student, MultipartFile file) throws IOException;
    List<StudentEntity> getAllStudents();
    Iterable<StudentEntity> findStudentById(Long id);
    Iterable<StudentEntity> findByFirstName(String firstName);
    boolean deleteById(Long id);
    void updateStudent(Student student);
}
