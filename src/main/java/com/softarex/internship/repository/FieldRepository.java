package com.softarex.internship.repository;

import com.softarex.internship.model.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FieldRepository extends JpaRepository<Field, Long> {
    Field getFieldById(Long id);
}
