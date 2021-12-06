package com.softarex.internship.repository;

import com.softarex.internship.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    boolean existsUserByEmail(String email);
    User getUserById(long id);
    User findUserByEmail(String email);
}
