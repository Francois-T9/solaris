import React from "react";

function Contacto() {
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Formulario de contacto</legend>

        <label className="label">Nombre</label>
        <input type="text" className="input" placeholder="Nombre" />

        <label className="label">Apellido</label>
        <input type="text" className="input" placeholder="Apellido" />
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Tipo de solicitud</label>
        <select defaultValue="Pick a browser" className="select">
          <option disabled={true}>Elige una opcion</option>
          <option>Seguimiento</option>
          <option>Envio</option>
          <option>Mantenimiento</option>
        </select>

        <label className="label">Tu pregunta</label>
        <textarea
          className="textarea"
          placeholder="Indiquenos su pregunta"
        ></textarea>

        <button className="btn btn-neutral mt-4">Enviar</button>
      </fieldset>
    </div>
  );
}

export default Contacto;
