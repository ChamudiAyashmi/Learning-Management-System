package edu.icet.service;

import edu.icet.dto.Admin;
public interface AdminService {
    boolean saveAdmin(Admin admin);
    boolean findAdminByUsernameAndPassword(String username, String password);
}
