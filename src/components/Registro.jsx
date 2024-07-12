import React, { useState } from 'react';

export const Registro = () => {
  const [form, setForm] = useState({
    username: '',
    nombres: '',
    apellidos: '',
    correo: '',
    num_doc_identificacion: '',
    telefono: '',
    password1: '',
    password2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/usuarios/registrar/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Usuario registrado exitosamente:', data);

      } else {
        console.error('Error al registrar usuario:', response.statusText);

      }
    } catch (error) {
      console.error('Error en la solicitud:', error.message);

    }
  };

  return (
    <div>
      <h1 className='text-center'>Bienvenidos al módulo de Registro de usuarios</h1>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" name="username" value={form.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="nombres">Nombres</label>
            <input type="text" className="form-control" id="nombres" name="nombres" value={form.nombres} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" className="form-control" id="apellidos" name="apellidos" value={form.apellidos} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input type="email" className="form-control" id="correo" name="correo" value={form.correo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="num_doc_identificacion">Número de Documento de Identificación</label>
            <input type="text" className="form-control" id="num_doc_identificacion" name="num_doc_identificacion" value={form.num_doc_identificacion} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" className="form-control" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password1">Contraseña</label>
            <input type="password" className="form-control" id="password1" name="password1" value={form.password1} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirmar Contraseña</label>
            <input type="password" className="form-control" id="password2" name="password2" value={form.password2} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
      </div>
    </div>
  );
};
