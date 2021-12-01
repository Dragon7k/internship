package com.softarex.internship.controllers;

import com.softarex.internship.exception.UserLoginException;
import com.softarex.internship.model.User;
import com.softarex.internship.services.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/login")//////////////////////////////////////&&&&?????????????????
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public User addUser(@RequestBody User user) throws UserLoginException {
        if(userService.existUser(user.getEmail())){
            throw new UserLoginException("user already exist");
        }else {
           return userService.add(user);
        }
    }
    @GetMapping
    public User getUser(@RequestParam long id){
        return userService.getUser(id);
    }
}
