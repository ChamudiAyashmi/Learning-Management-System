package edu.icet.controller;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;
    @PostMapping
    public boolean saveStudent(@ModelAttribute Student student, @RequestPart("file")MultipartFile file) throws IOException {
        return studentService.registerStudent(student,file);
    }
    @GetMapping
    public List<StudentEntity> getAllStudents(){
        return studentService.getAllStudents();
    }
    @GetMapping("/{id}")
    public Iterable<StudentEntity> findStudentById(@PathVariable Long id){
        return studentService.findStudentById(id);
    }
    @GetMapping("/byFirstName/{firstName}")
    public Iterable<StudentEntity> findStudentByFirstName(@PathVariable String firstName){
        return studentService.findByFirstName(firstName);
    }
    @DeleteMapping("/{id}")
    public boolean deleteAdminById(@PathVariable String id){
        return studentService.deleteById(Long.valueOf(id));
    }
    @PutMapping("/{id}")
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }
}
