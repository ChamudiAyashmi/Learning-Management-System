package edu.icet.repository;

import edu.icet.dao.StudentEntity;
import org.springframework.data.repository.CrudRepository;
public interface StudentRepository extends CrudRepository<StudentEntity,Long> {
    Iterable<StudentEntity> findStudentById(Long id);
    Iterable<StudentEntity> findByFirstName(String firstName);

}
