import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/usuarios/login/', credentials);
      console.log(response.data);
      if (response.data.user_id) {
        navigate('/encuesta');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        navigate('/registro');
      } else {
        console.error('Error al iniciar sesión:', error.response.data);
      }
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center mb-5">
            <h1>Bienvenidos a las Encuestas del DANE</h1>
          </div>
          <div className="col-sm-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={credentials.username} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
            </form>
            <p className="text-center mt-3">¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};


