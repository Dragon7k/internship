package com.softarex.internship.controllers;


import com.softarex.internship.model.Field;
import com.softarex.internship.services.field.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/fields")
public class FieldController {
    @Autowired
    private FieldService fieldService;

    @GetMapping
    public List<Field> getField(){ return fieldService.getAll(); }

    @PostMapping
    public Field addField(@RequestBody Field field){
        return fieldService.add(field);
    }
}
