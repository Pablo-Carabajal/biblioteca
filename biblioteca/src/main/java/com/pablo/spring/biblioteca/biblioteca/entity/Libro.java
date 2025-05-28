package com.pablo.spring.biblioteca.biblioteca.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "libros")
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLibro;
    private String editorial;
    private String titulo;
    @ManyToOne
    @JoinColumn(name = "idAutor" )
    private Autor autor;
}
