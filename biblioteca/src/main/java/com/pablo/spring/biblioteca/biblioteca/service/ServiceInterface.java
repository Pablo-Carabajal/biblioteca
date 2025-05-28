package com.pablo.spring.biblioteca.biblioteca.service;

import java.util.List;

public interface ServiceInterface <T>{

    List<T>listar();
    T buscarId(Long id);
    void crear (T t);
    void modificar(T t, Long id);
    void eliminar(Long id);


}
