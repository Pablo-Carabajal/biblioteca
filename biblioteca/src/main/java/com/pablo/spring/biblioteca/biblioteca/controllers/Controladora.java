package com.pablo.spring.biblioteca.biblioteca.controllers;

import com.pablo.spring.biblioteca.biblioteca.entity.Autor;
import com.pablo.spring.biblioteca.biblioteca.entity.Libro;
import com.pablo.spring.biblioteca.biblioteca.service.AutorService;
import com.pablo.spring.biblioteca.biblioteca.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;





@RestController
@RequestMapping("/api")
public class Controladora {

    @Autowired
    AutorService serviceA;
    @Autowired
    LibroService serviceL;
    
    @GetMapping("/lista-autores")
    @ResponseStatus(HttpStatus.OK)
    public List<Autor> ListarAutores(){
        return serviceA.listar();
    }

    @GetMapping("buscar-autor/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Autor buscarAutor(@PathVariable Long id) {
        return serviceA.buscarId(id);
    }

    @PutMapping("modificar-autor/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modificarAutor(@PathVariable Long id, @RequestBody Autor autor) {
            serviceA.modificar(autor, id);   
    } 

    @PostMapping("crear-autor")
    @ResponseStatus(HttpStatus.OK)
    public void postMethodName(@RequestBody Autor autor) {
        serviceA.crear(autor);
    }

    @DeleteMapping("eliminar-autor/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void eliminarAutor(@PathVariable Long id){
      serviceA.eliminar(id);
    }
    

    @GetMapping("libros")
    @ResponseStatus(HttpStatus.OK)
    public List<Libro> listarLibros(){
        return serviceL.listar();
    }
 
    @GetMapping("libros/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Libro buscarLibro(@PathVariable Long id) {
        return serviceL.buscarId(id);
    }

    @PutMapping("libros/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modificarLibro(@PathVariable Long id, @RequestBody Libro libro) {
            serviceL.modificar(libro, id);   
    } 

    @PostMapping("libros")
    @ResponseStatus(HttpStatus.OK)
    public void crearLibro(@RequestBody Libro libro) {
        serviceL.crear(libro);
    }

    @DeleteMapping("libros/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void eliminarLibro(@PathVariable Long id){
      serviceL.eliminar(id);
    }
    
    
}
