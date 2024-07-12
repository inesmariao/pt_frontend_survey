import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CapituloII = () => {
  const [form, setForm] = useState({
    motivo_viaje: '',
    otro_motivo_viaje: '',
    organiza_viaje: [],
    otro_organiza_viaje: '',
    tipo_servicios: [],
    otro_servicio: ''
  });

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('/api/capituloII/');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: checked
          ? [...prevForm[name], value]
          : prevForm[name].filter((v) => v !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/capituloII/', form);
      setEntries([...entries, response.data]);
      setForm({
        motivo_viaje: '',
        otro_motivo_viaje: '',
        organiza_viaje: [],
        otro_organiza_viaje: '',
        tipo_servicios: [],
        otro_servicio: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/capituloII/${id}/`);
      setEntries(entries.filter(entry => entry.id !== id));
    } catch (error) {
      console.error('Error deleting entry', error);
    }
  };

  return (
    <div className='col-10 text-center px-5 border-left border-right border-dark'>
      <form onSubmit={handleSubmit} className='font-weight-semibold'>
        <hr className="border border-top-2 solid border-dark m-0" />
        <h3 className="text-left my-4">Capítulo II</h3>
        <div className="row text-left">
          <div className="col">
            <div className="form-group row mb-4 mt-2">
              <label className="col-sm-12">6. ¿Cuál fue el principal motivo de este viaje? <span className='text-info'>(Por favor seleccione solo una opción)</span></label>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <div className="row">
                  <div className="col-sm-6">
                    {['1. Visita a familiares o amigos', '2. Vacaciones (recreación, ocio, sol y playa)', '3. Compras', '4. Turismo Cultural', '5. Asistencia a eventos artísticos', '6. Estudio y/o formación', '7. Tratamiento de salud y belleza', '8. Religioso'].map((option, index) => (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="motivo_viaje"
                          id={`motivo${index + 1}`}
                          value={index + 1}
                          checked={form.motivo_viaje === String(index + 1)}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label" htmlFor={`motivo${index + 1}`}>
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm-6">
                    {['9. Asistencia a Congresos, Seminarios, convenciones', '10. Trabajo remunerado en destino', '11. Trabajo o negocios (no remunerado en destino)', '12. Participación en eventos artísticos y/o deportivos', '13. Tránsito', '14. Otro'].map((option, index) => (
                      <div className="form-check" key={index + 8}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="motivo_viaje"
                          id={`motivo${index + 9}`}
                          value={index + 9}
                          checked={form.motivo_viaje === String(index + 9)}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label" htmlFor={`motivo${index + 9}`}>
                          {option}
                        </label>
                      </div>
                    ))}
                    {form.motivo_viaje === '14' && (
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="otro_motivo_viaje"
                        value={form.otro_motivo_viaje}
                        onChange={handleChange}
                        placeholder="Especificar otro motivo"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-12 my-4">7. ¿Cómo organizó su viaje? <span className='text-info'>(puede seleccionar más de una opción)</span></label>
              <div className="col-sm-8">
                {['Paquete turístico organizado por una agencia de viajes en Colombia', 'Paquete turístico organizado por una agencia de viajes en el país de visita', 'Paquete turístico organizado por terceros que no sean agencias de viajes', 'Viaje organizado por cuenta propia', 'Otro'].map((option, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="organiza_viaje"
                      id={`organiza${index + 1}`}
                      value={option}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={`organiza${index + 1}`}>
                      {`${index + 1}. ${option}`}
                    </label>
                  </div>
                ))}
                {form.organiza_viaje.includes('Otro') && (
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="otro_organiza_viaje"
                    value={form.otro_organiza_viaje}
                    onChange={handleChange}
                    placeholder="¿Cuál?"
                  />
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-12 my-4">8. ¿Qué tipo de servicios comprendió el paquete turístico? <span className='text-info'>(puede seleccionar más de una opción)</span></label>
              <div className="col-sm-6">
                {['Alojamiento', 'Transporte internacional', 'Alimentos y bebidas (No incluidos en el alojamiento)', 'Servicios culturales y de entretenimiento', 'Servicios deportivos y recreacionales (Ej.: Actividades de aventura, ecológicas, otros)'].map((option, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="tipo_servicios"
                      id={`servicio${index + 1}`}
                      value={option}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={`servicio${index + 1}`}>
                      {`${index + 1}. ${option}`}
                    </label>
                  </div>
                ))}
              </div>
              <div className="col-sm-6">
                {['Tours en destino (con servicio de guía)', 'Transporte aéreo interno en el destino'].map((option, index) => (
                  <div className="form-check" key={index + 5}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="tipo_servicios"
                      id={`servicio${index + 6}`}
                      value={option}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={`servicio${index + 6}`}>
                      {`${index + 6}. ${option}`}
                    </label>
                  </div>
                ))}
                <div className="form-group row">
                  <label className="col-sm-12">8. Otro transporte interno ¿Cuál?</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      name="otro_transporte"
                      value={form.otro_transporte}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12">9. Otro servicio. ¿Cuál?</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      name="otro_servicio"
                      value={form.otro_servicio}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary my-4">Guardar Capítulo II</button>
      </form>
      <ul className="list-group">
        {entries.map(entry => (
          <li key={entry.id} className="list-group-item d-flex justify-content-between align-items-center">
            {entry.motivo_viaje} - {entry.otro_motivo_viaje} - {entry.organiza_viaje.join(', ')} - {entry.tipo_servicios.join(', ')}
            <button className="btn btn-danger" onClick={() => handleDelete(entry.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
