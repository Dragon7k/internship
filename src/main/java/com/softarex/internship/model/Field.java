package com.softarex.internship.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Field {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany()
    private Set<Response> responses;
    private String label;
    private boolean required;
    private boolean isActive;
    @Enumerated(EnumType.STRING)
    private Type type;
    private String option;

}
