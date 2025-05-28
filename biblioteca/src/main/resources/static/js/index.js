    function listarLibros() {
      fetch('/api/libros')
        .then(r => r.json())
        .then(data => {
          let tabla = `<table><tr><th>ID</th><th>Título</th><th>Editorial</th><th>Autor</th></tr>`;
          data.forEach(l => {
            tabla += `<tr><td>${l.idLibro}</td><td>${l.titulo}</td><td>${l.editorial}</td><td>${l.autor.idAutor}</td></tr>`;
          });
          tabla += `</table>`;
          document.getElementById('tablaResultados').innerHTML = tabla;
        });
    }

    function abrirActualizarAutor() {
    Swal.fire({
      title: 'Actualizar Autor',
      html: `
        <input id="id" type="number" class="swal2-input" placeholder="ID Autor">
        <input id="nombre" class="swal2-input" placeholder="Nombre">
        <input id="apellido" class="swal2-input" placeholder="Apellido">
        
      `,
      confirmButtonText: 'Actualizar',
      showCancelButton: true,
      preConfirm: () => {
        const id = document.getElementById('id').value;
        const data = {
          nombre: document.getElementById('nombre').value,
          apellido: document.getElementById('apellido').value,
        };
        return fetch(`/api/modificar-autor/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(r => {
          if (!r.ok) throw new Error();
          Swal.fire('Éxito', 'Autor actualizado', 'success');
          listarAutores();
        }).catch(() => Swal.fire('Error', 'No se pudo actualizar', 'error'));
      }
    });
  }

  function abrirInsertarAutor() {
    Swal.fire({
      title: 'Insertar Autor',
      html: `
        <input id="nombre" class="swal2-input" placeholder="Nombre">
        <input id="apellido" class="swal2-input" placeholder="Apellido">
      `,
      confirmButtonText: 'Insertar',
      showCancelButton: true,
      preConfirm: () => {
        const data = {
          nombre: document.getElementById('nombre').value,
          apellido: document.getElementById('apellido').value,
        };
        return fetch('/api/crear-autor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(r => {
          if (!r.ok) throw new Error();
          Swal.fire('Éxito', 'Autor insertado', 'success');
          listarAutores();
        }).catch(() => Swal.fire('Error', 'No se pudo insertar', 'error'));
      }
    });
  }

  function abrirEliminarAutor() {
    Swal.fire({
      title: 'Eliminar Autor',
      input: 'number',
      inputLabel: 'Ingrese ID del autor',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      preConfirm: (id) => {
        return fetch(`/api/eliminar-autor/${id}`, { method: 'DELETE' })
          .then(r => {
            if (!r.ok) throw new Error();
            Swal.fire('Éxito', 'Autor eliminado', 'success');
            listarAutores();
          }).catch(() => Swal.fire('Error', 'No se pudo eliminar', 'error'));
      }
    });
  }

    function listarAutores() {
      fetch('/api/lista-autores')
        .then(r => r.json())
        .then(data => {
          let tabla = `<table><tr><th>ID</th><th>Nombre</th><th>Apellido</th></tr>`;
          data.forEach(a => {
            tabla += `<tr><td>${a.idAutor}</td><td>${a.nombre}</td><td>${a.apellido}</td></tr>`;
          });
          tabla += `</table>`;
          document.getElementById('tablaResultados').innerHTML = tabla;
        });
    }

    function buscarLibroId() {
      const id = prompt("Ingrese ID del libro:");
      if (id) {
        fetch(`/api/libros/${id}`)
          .then(r => {
            if (!r.ok) throw new Error();
            return r.json();
          })
          .then(libro => {
            let tabla = `<table><tr><th>ID</th><th>Título</th><th>Editorial</th><th>Autor</th></tr>
                         <tr><td>${libro.idLibro}</td><td>${libro.titulo}</td><td>${libro.editorial}</td><td>${libro.autor.idAutor}</td></tr></table>`;
            document.getElementById('tablaResultados').innerHTML = tabla;
          })
          .catch(() => Swal.fire('Error', 'Libro no encontrado', 'error'));
      }
    }

    function buscarAutorId() {
      const id = prompt("Ingrese ID del autor:");
      if (id) {
        fetch(`/api/buscar-autor/${id}`)
          .then(r => {
            if (!r.ok) throw new Error();
            return r.json();
          })
          .then(autor => {
            let tabla = `<table><tr><th>ID</th><th>Nombre</th><th>Apellido</th></tr>
                         <tr><td>${autor.idAutor}</td><td>${autor.nombre}</td><td>${autor.apellido}</td></tr></table>`;
            document.getElementById('tablaResultados').innerHTML = tabla;
          })
          .catch(() => Swal.fire('Error', 'Autor no encontrado', 'error'));
      }
    }

    // --- Formulario Insertar Libro ---
    function abrirInsertarLibro() {
      Swal.fire({
        title: 'Insertar Libro',
        html: `
          <input id="titulo" class="swal2-input" placeholder="Título">
          <input id="editorial" class="swal2-input" placeholder="Editorial">
          <input id="idAutor" class="swal2-input" placeholder="ID Autor">
        `,
        confirmButtonText: 'Insertar',
        showCancelButton: true,
        preConfirm: () => {
          const data = {
            titulo: document.getElementById('titulo').value,
            editorial: document.getElementById('editorial').value,
            autor:{
                idAutor:Number(document.getElementById('idAutor').value),
            }
          };
          return fetch('/api/libros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }).then(r => {
            if (!r.ok) throw new Error();
            Swal.fire('Éxito', 'Libro insertado', 'success');
            listarLibros();
          }).catch(() => Swal.fire('Error', 'No se pudo insertar', 'error'));
        }
      });
    }

    // --- Formulario Actualizar Libro ---
    function abrirActualizarLibro() {
      Swal.fire({
        title: 'Actualizar Libro',
        html: `
          <input id="id" type="number" class="swal2-input" placeholder="ID Libro">
          <input id="titulo" class="swal2-input" placeholder="Título">
          <input id="editorial" class="swal2-input" placeholder="Editorial">
          <input id="idAutor" class="swal2-input" placeholder="ID Autor">
        `,
        confirmButtonText: 'Actualizar',
        showCancelButton: true,
        preConfirm: () => {
          const id = document.getElementById('id').value;
          const data = {
            titulo: document.getElementById('titulo').value,
            editorial: document.getElementById('editorial').value,
            autor:{
               idAutor:Number(document.getElementById('idAutor').value),
            } 
            
          };
          return fetch(`/api/libros/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }).then(r => {
            if (!r.ok) throw new Error();
            Swal.fire('Éxito', 'Libro actualizado', 'success');
            listarLibros();
          }).catch(() => Swal.fire('Error', 'No se pudo actualizar', 'error'));
        }
      });
    }

    // --- Formulario Eliminar Libro ---
    function abrirEliminarLibro() {
      Swal.fire({
        title: 'Eliminar Libro',
        input: 'number',
        inputLabel: 'Ingrese ID del libro',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        preConfirm: (id) => {
          return fetch(`/api/libros/${id}`, { method: 'DELETE' })
            .then(r => {
              if (!r.ok) throw new Error();
              Swal.fire('Éxito', 'Libro eliminado', 'success');
              listarLibros();
            }).catch(() => Swal.fire('Error', 'No se pudo eliminar', 'error'));
        }
      });
    }


