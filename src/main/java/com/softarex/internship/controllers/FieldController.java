package com.softarex.internship.controllers;


import com.softarex.internship.exception.FieldException;
import com.softarex.internship.exception.UserLoginException;
import com.softarex.internship.model.Field;
import com.softarex.internship.model.User;
import com.softarex.internship.services.field.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @DeleteMapping("/{id}")
    public Field deleteField(@PathVariable long id){
        return fieldService.deleteById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Field> updateField(@PathVariable int id, @RequestBody Field fieldDetails){
        Field field = fieldService.getFieldById(id);
        field.setLabel(fieldDetails.getLabel());
        field.setType(fieldDetails.getType());
        field.setRequired(fieldDetails.isRequired());
        field.setActive(fieldDetails.isActive());
        field.setOption(fieldDetails.getOption());
        Field updateField= fieldService.add(field);
        return ResponseEntity.ok(updateField);
    }
    @PostMapping
    public Field addField(@RequestBody Field field) throws FieldException {
        System.out.println(field.getLabel());
        if(fieldService.existFieldByLabel(field.getLabel())){
            throw new FieldException("field is already exist");
        }else {
            return fieldService.add(field);
        }
    }
}
