package com.softarex.internship.services.user;

import com.softarex.internship.model.Response;
import com.softarex.internship.model.User;

import java.util.List;

public interface UserService {
    boolean existUser(String email);
    User add(User user);
    User getUserById(int id);
    User getUserByEmail(String email);
}
