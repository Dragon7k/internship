package com.softarex.internship.services.field;

import com.softarex.internship.model.Field;
import com.softarex.internship.repository.FieldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FieldServiceImpl implements FieldService{

    @Autowired
    private FieldRepository fieldRepository;

    @Override
    public boolean existFieldByLabel(String label) {
        return fieldRepository.existsFieldByLabel(label);
    }

    @Override
    public List<Field> getAll() {
        return fieldRepository.findAll();
    }

    @Override
    public Field add(Field field) {
        return fieldRepository.save(field);
    }

    @Override
    public Field getFieldById(long id) {
        return fieldRepository.getFieldById(id);
    }

    @Override
    public Field deleteById(long id) {
        return fieldRepository.deleteById(id);
    }


}
