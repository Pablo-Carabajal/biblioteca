package com.pablo.spring.biblioteca.biblioteca.repository;

import com.pablo.spring.biblioteca.biblioteca.entity.Autor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutorRepository extends JpaRepository<Autor,Long> {
}
