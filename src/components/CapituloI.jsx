import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CapituloI = () => {
  const [form, setForm] = useState({
    pais_residencia_I: '',
    nacionalidad_I: '',
    sexo_I: '',
    edad_I: '',
    con_quien_viaja_I: '',
    viaja_otro_especifique_I: '',
    cantidad_personas_I: ''
  });

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('/api/capituloI/');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/capituloI/', form);
      setEntries([...entries, response.data]);
      setForm({
        pais_residencia_I: '',
        nacionalidad_I: '',
        sexo_I: '',
        edad_I: '',
        con_quien_viaja_I: '',
        viaja_otro_especifique_I: '',
        cantidad_personas_I: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/capituloI/${id}/`);
      setEntries(entries.filter(entry => entry.id !== id));
    } catch (error) {
      console.error('Error deleting entry', error);
    }
  };

  return (
    <div className='col-10 text-center mt-5 px-5 border-top border-left border-right border-dark'>
      <h1 className="my-5">Formulario de Encuesta</h1>
      <form onSubmit={handleSubmit} className='font-weight-semibold'>
        <h3 className="text-left">Capítulo I</h3>
        <div className="row text-left">
          <div className="col pt-2">
            {/* Form Fields */}
            <div className="form-group row my-4">
              <label className="col-sm-4">1. ¿Cuál es su país de residencia permanente?</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="pais_residencia_I"
                  value={form.pais_residencia_I}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4">2. ¿Cuál es su nacionalidad?</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="nacionalidad_I"
                  value={form.nacionalidad_I}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <div className="form-group row justify-left align-items-center">
                  <label className="col-sm-3 col-form-label">3. Sexo</label>
                  <div className="col-sm d-flex flex-wrap align-items-center">
                    <label className="col-form-label mr-3">
                      <input
                        type="radio"
                        name="sexo_I"
                        value="masculino"
                        checked={form.sexo_I === 'masculino'}
                        onChange={handleChange}
                        required
                      /> Masculino
                    </label>
                    <label className="col-form-label mr-3">
                      <input
                        type="radio"
                        name="sexo_I"
                        value="femenino"
                        checked={form.sexo_I === 'femenino'}
                        onChange={handleChange}
                        required
                      /> Femenino
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group d-flex">
                  <label className="col-sm-4 col-form-label">Edad</label>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      name="edad_I"
                      value={form.edad_I}
                      onChange={handleChange}
                      style={{ maxWidth: '70px' }}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4">4. ¿Con quién viaja?</label>
              <div className="col-sm-8 d-flex flex-wrap">
                <label className="mr-3">
                  <input
                    type="radio"
                    name="con_quien_viaja_I"
                    value="solo"
                    checked={form.con_quien_viaja_I === 'solo'}
                    onChange={handleChange}
                    required
                  /> Solo
                </label>
                <label className="mr-3">
                  <input
                    type="radio"
                    name="con_quien_viaja_I"
                    value="amigos"
                    checked={form.con_quien_viaja_I === 'amigos'}
                    onChange={handleChange}
                    required
                  /> Amigos
                </label>
                <label className="mr-3">
                  <input
                    type="radio"
                    name="con_quien_viaja_I"
                    value="companeros_trabajo"
                    checked={form.con_quien_viaja_I === 'companeros_trabajo'}
                    onChange={handleChange}
                    required
                  /> Compañeros de trabajo
                </label>
                <label className="mr-3">
                  <input
                    type="radio"
                    name="con_quien_viaja_I"
                    value="familia"
                    checked={form.con_quien_viaja_I === 'familia'}
                    onChange={handleChange}
                    required
                  /> Familia
                </label>
                <label>
                  <input
                    type="radio"
                    name="con_quien_viaja_I"
                    value="otro"
                    checked={form.con_quien_viaja_I === 'otro'}
                    onChange={handleChange}
                    required
                  /> Otro
                </label>
              </div>
            </div>
            {form.con_quien_viaja_I === 'otro' && (
              <div className="form-group row">
                <label className="col-sm-4">Especifique</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="viaja_otro_especifique_I"
                    value={form.viaja_otro_especifique_I}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}
            <div className="form-group row">
              <label className="col-sm-6">5. ¿Incluyéndolo a usted, cuántas personas viajan?</label>
              <div className="col-sm-2">
                <input
                  type="number"
                  className="form-control"
                  name="cantidad_personas_I"
                  value={form.cantidad_personas_I}
                  onChange={handleChange}
                  style={{ maxWidth: '70px' }}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary my-4">Guardar Capítulo I</button>
      </form>

      <ul className="list-group">
        {entries.map(entry => (
          <li key={entry.id} className="list-group-item d-flex justify-content-between align-items-center">
            {entry.pais_residencia} - {entry.nacionalidad} - {entry.sexo} - {entry.edad}
            <button className="btn btn-danger" onClick={() => handleDelete(entry.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
