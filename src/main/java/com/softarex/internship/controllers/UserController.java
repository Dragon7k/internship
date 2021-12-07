package com.softarex.internship.controllers;

import com.softarex.internship.exception.UserLoginException;
import com.softarex.internship.model.User;
import com.softarex.internship.services.user.UserService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) throws UserLoginException {
        System.out.println("email: "+email);
        if(userService.existUser(email)){
           User user = userService.getUserByEmail(email);
           return ResponseEntity.ok(user);
        }else {
            return ResponseEntity.of(Optional.empty());
        }
    }
    @PutMapping("/edit_profile/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User userDetails){
        User user = userService.getUserById(id);
        user.setEmail(userDetails.getEmail());
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setPhoneNumber(userDetails.getPhoneNumber());
        User updateUser = userService.add(user);
        return ResponseEntity.ok(updateUser);
    }

    @PutMapping("/change_pass/{id}")
    public ResponseEntity<User> updateUserPass(@PathVariable int id, @RequestBody User userDetails){
        System.out.println(userDetails.getPassword());
        User user = userService.getUserById(id);
        user.setPassword(userDetails.getPassword());
        User updateUser = userService.add(user);
        return ResponseEntity.ok(updateUser);
    }

    @GetMapping("/change_pass/{id}")
    public String getUserByPassById(@PathVariable int id) throws UserLoginException {
        return userService.getUserById(id).getPassword();
    }
}
