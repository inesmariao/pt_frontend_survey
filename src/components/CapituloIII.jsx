import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CapituloIII = () => {
  const [form, setForm] = useState({
    gasto_paquete_turistico: '',
    valor_paquete_usted: '',
    moneda_paquete_usted: '',
    valor_paquete_terceros_no_grupo: '',
    moneda_paquete_terceros_no_grupo: '',
    valor_paquete_terceros_si_grupo: '',
    moneda_paquete_terceros_si_grupo: '',
    personas_paquete: '',
    gasto_transporte_internacional: '',
    valor_transporte_usted: '',
    moneda_transporte_usted: '',
    valor_transporte_terceros_no_grupo: '',
    moneda_transporte_terceros_no_grupo: '',
    valor_transporte_terceros_si_grupo: '',
    moneda_transporte_terceros_si_grupo: '',
    personas_transporte: '',
    pais_visita: '',
    noches_vivienda_propia: '',
    noches_hotel: '',
    noches_vivienda_familiar_amigos: '',
    noches_vivienda_alquiler: '',
    noches_otro_tipo_vivienda: ''
  });

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('/api/capituloIII');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/capituloIII', form);
      setEntries([...entries, response.data]);
      setForm({
        gasto_paquete_turistico: '',
        valor_paquete_usted: '',
        moneda_paquete_usted: '',
        valor_paquete_terceros_no_grupo: '',
        moneda_paquete_terceros_no_grupo: '',
        valor_paquete_terceros_si_grupo: '',
        moneda_paquete_terceros_si_grupo: '',
        personas_paquete: '',
        gasto_transporte_internacional: '',
        valor_transporte_usted: '',
        moneda_transporte_usted: '',
        valor_transporte_terceros_no_grupo: '',
        moneda_transporte_terceros_no_grupo: '',
        valor_transporte_terceros_si_grupo: '',
        moneda_transporte_terceros_si_grupo: '',
        personas_transporte: '',
        pais_visita: '',
        noches_vivienda_propia: '',
        noches_hotel: '',
        noches_vivienda_familiar_amigos: '',
        noches_vivienda_alquiler: '',
        noches_otro_tipo_vivienda: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/capituloIII/${id}`);
      setEntries(entries.filter(entry => entry.id !== id));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <div className='col-10 text-center mb-5 px-5 border-bottom border-left border-right border-dark'>
      <form onSubmit={handleSubmit} className='font-weight-semibold'>
        <div className="form-group">
          <hr className="border border-top-2 solid border-dark m-0" />
          <h4 className="text-left my-4">Capítulo III</h4>
          <p className='text-justify'>Gastos: Registre el valor que fue pagado por Usted, por Terceros que <strong><u>NO</u></strong> hacen parte de su grupo de viaje y por Terceros que <strong><u>SÍ</u></strong> hacen parte de su grupo de viaje, así como el tipo de moneda utilizado y el número de personas que cubre cada gasto.</p>
          <p className="text-left">9. Gastos.</p>
          <div className="container mt-2 d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}>Gastos</th>
                    <th style={{ width: '10%' }}>¿Hubo gasto?</th>
                    <th colSpan="2" style={{ width: '20%' }}>Pagado por usted</th>
                    <th colSpan="2" style={{ width: '20%' }}>Terceros que NO hacen parte del grupo</th>
                    <th colSpan="2" style={{ width: '20%' }}>Terceros que SI hacen parte del grupo</th>
                    <th style={{ width: '15%' }}>¿Para cuántas personas?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>a. Paquete turístico</td>
                    <td>
                      <div className="form-check d-flex justify-content-center align-items-center">
                        <input className="form-check-input" type="radio" name="gasto_paquete_turistico" id="paquete_si" value="si" />
                        <label className="form-check-label ml-2" htmlFor="paquete_si">Sí</label>
                      </div>
                      <div className="form-check d-flex justify-content-center align-items-center">
                        <input className="form-check-input" type="radio" name="gasto_paquete_turistico" id="paquete_no" value="no" />
                        <label className="form-check-label ml-3" htmlFor="paquete_no">No</label>
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="valor_paquete_usted">Valor</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="valor_paquete_usted" name="valor_paquete_usted" value={form.valor_paquete_usted} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="moneda_paquete_usted">Tipo de Moneda</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="moneda_paquete_usted" name="moneda_paquete_usted" value={form.moneda_paquete_usted} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="valor_paquete_terceros_no_grupo">Valor</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="valor_paquete_terceros_no_grupo" name="valor_paquete_terceros_no_grupo" value={form.valor_paquete_terceros_no_grupo} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="moneda_paquete_terceros_no_grupo">Tipo de Moneda</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="moneda_paquete_terceros_no_grupo" name="moneda_paquete_terceros_no_grupo" value={form.moneda_paquete_terceros_no_grupo} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="valor_paquete_terceros_si_grupo">Valor</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="valor_paquete_terceros_si_grupo" name="valor_paquete_terceros_si_grupo" value={form.valor_paquete_terceros_si_grupo} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="moneda_paquete_terceros_si_grupo">Tipo de Moneda</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="moneda_paquete_terceros_si_grupo" name="moneda_paquete_terceros_si_grupo" value={form.moneda_paquete_terceros_si_grupo} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }} className='text-center align-middle p-0'>
                      <label className="form-check-label small" htmlFor="personas_paquete">Personas</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="personas_paquete" name="personas_paquete" value={form.personas_paquete} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>b. Transporte Internacional</td>
                    <td>
                      <div className="form-check d-flex justify-content-center align-items-center">
                        <input className="form-check-input" type="radio" name="gasto_transporte_internacional" id="transporte_si" value="si" />
                        <label className="form-check-label ml-2" htmlFor="transporte_si">Sí</label>
                      </div>
                      <div className="form-check d-flex justify-content-center align-items-center">
                        <input className="form-check-input" type="radio" name="gasto_transporte_internacional" id="transporte_no" value="no" />
                        <label className="form-check-label ml-3" htmlFor="transporte_no">No</label>
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="valor_transporte_usted">Valor</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="valor_transporte_usted" name="valor_transporte_usted" value={form.valor_transporte_usted} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="moneda_transporte_usted">Tipo de Moneda</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="moneda_transporte_usted" name="moneda_transporte_usted" value={form.moneda_transporte_usted} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="valor_transporte_terceros_no_grupo">Valor</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="valor_transporte_terceros_no_grupo" name="valor_transporte_terceros_no_grupo" value={form.valor_transporte_terceros_no_grupo} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="moneda_transporte_terceros_no_grupo">Tipo de Moneda</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="moneda_transporte_terceros_no_grupo" name="moneda_transporte_terceros_no_grupo" value={form.moneda_transporte_terceros_no_grupo} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="valor_transporte_terceros_si_grupo">Valor</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="valor_transporte_terceros_si_grupo" name="valor_transporte_terceros_si_grupo" value={form.valor_transporte_terceros_si_grupo} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }}>
                      <label className="form-check-label small" htmlFor="moneda_transporte_terceros_si_grupo">Tipo de Moneda</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="moneda_transporte_terceros_si_grupo" name="moneda_transporte_terceros_si_grupo" value={form.moneda_transporte_terceros_si_grupo} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                    <td style={{ width: '10%' }} className='text-center align-middle p-0'>
                      <label className="form-check-label small" htmlFor="personas_transporte">Personas</label>
                      <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control" id="personas_transporte" name="personas_transporte" value={form.personas_transporte} onChange={handleChange} style={{ maxWidth: '50px', maxHeight: '30px' }} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className='text-justify'>Nota: Se entiende por Terceros que <strong><u>NO</u></strong> hacen parte del grupo de viaje a cualquier persona que no sea entrevistada y que haya pagado en nombre de usted o su familia. Se entiende por Terceros que <strong><u>SÍ</u></strong> hacen parte del grupo de viaje a cualquier persona que esté viajando con usted y con la que comparte los gastos de su viaje.</p>
        </div>

        <div className="mt-5">
          <p className="text-left">10. Por favor nombre los países de visita y el número de noches en cada forma de alojamiento utilizado.</p>
          <div className="table-responsive">
            <table className="table no-border-table">
              <thead>
                <tr>
                  <th>País de visita</th>
                  <th>Vivienda Propia</th>
                  <th>Hotel / Apartahotel</th>
                  <th>Vivienda familiar o de amigos</th>
                  <th>Vivienda en alquiler</th>
                  <th>Otro tipo de vivienda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select className="form-control col-sm-12">
                      <option value="Venezuela">Venezuela</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Chile">Chile</option>
                      <option value="Panama">Panama</option>
                      <option value="Argentina">Argentina</option>
                      <option value="otro">Otro</option>
                    </select>
                  </td>
                  <td>
                    <input type="text" className="form-control" placeholder="" />
                    <label className="form-check-label small" htmlFor="paises"># Noches</label>
                  </td>
                  <td>
                    <input type="text" className="form-control" placeholder="" />
                    <label className="form-check-label small" htmlFor="paises"># Noches</label>
                  </td>
                  <td>
                    <input type="text" className="form-control" placeholder="" />
                    <label className="form-check-label small" htmlFor="paises"># Noches</label>
                  </td>
                  <td>
                    <input type="text" className="form-control" placeholder="" />
                    <label className="form-check-label small" htmlFor="paises"># Noches</label>
                  </td>
                  <td>
                    <input type="text" className="form-control" placeholder="" />
                    <label className="form-check-label small" htmlFor="paises"># Noches</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='container text-center mb-5'>
          <button type="submit" className="btn btn-success">Enviar</button>
          <button type="submit" className="btn btn-primary ml-2">Editar</button>
          <button type="submit" className="btn btn-danger ml-2">Eliminar</button>
        </div>
      </form>
    </div>
  );
};
