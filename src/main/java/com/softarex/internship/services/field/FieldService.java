package com.softarex.internship.services.field;

import com.softarex.internship.model.Field;

import java.util.List;

public interface FieldService {
    boolean existFieldByLabel(String label);
    List<Field> getAll();
    Field add(Field field);
    Field getFieldById(long id);
    Field deleteById(long id);
}
