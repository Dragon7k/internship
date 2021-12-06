package com.softarex.internship.controllers;

import com.softarex.internship.exception.UserLoginException;
import com.softarex.internship.model.User;
import com.softarex.internship.services.user.UserService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/login")//////////////////////////////////////&&&&?????????????????
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping()
    public User addUser(@RequestBody User user) throws UserLoginException {
        if(userService.existUser(user.getEmail())){
            throw new UserLoginException("user already exist");
        }else {
           return userService.add(user);
        }
    }
    @GetMapping("/{email}")
    public User getUserPass(@PathVariable String email) throws UserLoginException {
        System.out.println("email: "+email);
        if(userService.existUser(email)){
           User user = userService.getUserByEmail(email);
           return user;
        }else {
            throw new UserLoginException("user already doesn't exist");
        }
    }
    @GetMapping
    public User getUser(@RequestParam long id){
        return userService.getUser(id);
    }
}
