export const validarCapituloI = (form) => {
  const errores = {};

  // Validación para país de residencia
  if (!form.pais_residencia_I) {
    errores.pais_residencia_I = 'Debe seleccionar un país de residencia';
  }

  // Validación para nacionalidad
  if (!form.nacionalidad_I) {
    errores.nacionalidad_I = 'Debe seleccionar una nacionalidad';
  }

  // Validación para sexo
  if (!form.sexo_I) {
    errores.sexo_I = 'Debe seleccionar una opción para el sexo';
  }

  // Validación para edad
  if (!form.edad_I || form.edad_I <= 0) {
    errores.edad_I = 'Debe ingresar una edad válida';
  }

  // Validación para con quién viaja
  if (!form.con_quien_viaja_I) {
    errores.con_quien_viaja_I = 'Debe seleccionar con quién viaja';
  }

  // Validación específica si selecciona "Otro" en con quién viaja
  if (form.con_quien_viaja_I === 'O' && !form.viaja_otro_especifique_I) {
    errores.viaja_otro_especifique_I = 'Debe especificar con quién viaja';
  }

  // Validación para cantidad de personas
  if (!form.cantidad_personas_I || form.cantidad_personas_I <= 0) {
    errores.cantidad_personas_I = 'Debe ingresar una cantidad válida de personas';
  }

  return errores;
};
