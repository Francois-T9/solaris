import { useState } from "react";
import type { ContactData } from "../types/types";
import { useUserStore } from "../store/user.store";
function Contacto() {
  const { sendContact, contactRequestError, contactRequestSuccess } =
    useUserStore();
  const [data, setData] = useState<ContactData>({
    name: "",
    surname: "",
    email: "",
    requestType: "",
    question: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSignup = () => {
    sendContact(data);
  };
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Formulario de contacto</legend>

        <label className="label">Nombre</label>
        <input
          name="name"
          value={data.name}
          type="text"
          className="input"
          placeholder="Nombre"
          onChange={handleChange}
        />

        <label className="label">Apellido</label>
        <input
          name="surname"
          value={data.surname}
          type="text"
          className="input"
          placeholder="Apellido"
          onChange={handleChange}
        />
        <label className="label">Email</label>
        <input
          name="email"
          value={data.email}
          type="email"
          className="input"
          placeholder="Email"
          onChange={handleChange}
        />

        <label className="label">Tipo de solicitud</label>
        <select
          name="requestType"
          value={data.requestType}
          defaultValue="Pick a browser"
          className="select"
          onChange={handleChange}
        >
          <option disabled={true}>Elige una opcion</option>
          <option>Seguimiento</option>
          <option>Envio</option>
          <option>Mantenimiento</option>
        </select>

        <label className="label">Tu pregunta</label>
        <textarea
          name="question"
          value={data.question}
          className="textarea"
          placeholder="Indiquenos su pregunta"
          onChange={handleChange}
        ></textarea>
        {contactRequestError.length > 0 ? (
          <p className="text-red-500">{contactRequestError}</p>
        ) : (
          <p className="text-green-500">{contactRequestSuccess}</p>
        )}

        <button onClick={handleSignup} className="btn btn-neutral mt-4">
          Enviar
        </button>
      </fieldset>
    </div>
  );
}

export default Contacto;
