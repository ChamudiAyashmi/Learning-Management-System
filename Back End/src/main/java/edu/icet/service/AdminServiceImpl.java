package edu.icet.service;

import edu.icet.dao.AdminEntity;
import edu.icet.dto.Admin;
import edu.icet.repository.AdminRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    ModelMapper modelMapper;
    public boolean isValidObjects(Admin admin){
        AdminEntity map = modelMapper.map(admin, AdminEntity.class);
        if (map.getUsername()==null || map.getPassword()==null || map.getEmail()==null){
            return false;
        }
        return true;
    }
    public boolean saveAdmin(Admin admin){
        if (!isValidObjects(admin)){
            return false;
        }else {
            AdminEntity map = modelMapper.map(admin, AdminEntity.class);
            adminRepository.save(map);
            return true;
        }
    }
    @Override
    public boolean findAdminByUsernameAndPassword(String username, String password) {
         return adminRepository.findByUsernameAndPassword(username, password) !=null ? true : false;
    }
}
