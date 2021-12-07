package com.softarex.internship.services.user;

import com.softarex.internship.model.User;
import com.softarex.internship.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean existUser(String email) {
        return userRepository.existsUserByEmail(email);
    }

    @Override
    public User add(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(int id) {
        return userRepository.getUserById(id);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
}
