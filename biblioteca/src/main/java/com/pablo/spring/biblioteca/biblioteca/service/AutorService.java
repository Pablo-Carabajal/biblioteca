package com.pablo.spring.biblioteca.biblioteca.service;

import com.pablo.spring.biblioteca.biblioteca.entity.Autor;
import com.pablo.spring.biblioteca.biblioteca.repository.AutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AutorService implements ServiceInterface<Autor> {
    @Autowired
    AutorRepository ar;


    @Override
    public List<Autor> listar() {
        return ar.findAll();
    }

    @Override
    public Autor buscarId(Long id) {
        return ar.findById(id).orElseThrow();
    }

    @Override
    public void crear(Autor autor) {
       ar.save(autor);
    }
    @Override
    public void modificar(Autor autor, Long id){
        autor = this.buscarId(id);
        ar.save(autor);
    }

    @Override
    public void eliminar(Long id) {
      try {
          ar.deleteById(id);
      }catch (Exception e){
          e.printStackTrace();
      }
    }
}
