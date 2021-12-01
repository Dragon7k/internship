package com.softarex.internship.services.field;

import com.softarex.internship.model.Field;

import java.util.List;

public interface FieldService {
    List<Field> getAll();
    Field add(Field field);

}
