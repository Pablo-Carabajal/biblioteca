package com.pablo.spring.biblioteca.biblioteca.service;


import com.pablo.spring.biblioteca.biblioteca.entity.Libro;
import com.pablo.spring.biblioteca.biblioteca.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class LibroService implements ServiceInterface<Libro>{
    @Autowired
    LibroRepository lr;
    @Override
    public List<Libro> listar() {
        return lr.findAll();
    }

    @Override
    public Libro buscarId(Long id) {
        return lr.findById(id).orElseThrow();
    }

    @Override
    public void crear(Libro libro) {
     lr.save(libro);
    }
    @Override
    public void modificar(Libro libro, Long id){
        libro = this.buscarId(id);
        lr.save(libro);
    }

    @Override
    public void eliminar(Long id) {
       try {
           lr.deleteById(id);
       }catch (Exception e){
           e.printStackTrace();
       }
    }
}
