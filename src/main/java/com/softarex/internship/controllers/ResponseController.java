package com.softarex.internship.controllers;

import com.softarex.internship.model.Response;
import com.softarex.internship.services.responses.ResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/responses")
public class ResponseController {
    @Autowired
    private ResponseService responseService;

    @GetMapping
    public List<Response> getResponse(){
        return responseService.getAll();
    }
    @PostMapping
    public Response addResponse(@RequestBody Response response){
        return responseService.add(response);
    }
}
