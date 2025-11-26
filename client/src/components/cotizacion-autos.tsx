import { useState } from "react";
import { useUserStore } from "../store/user.store";
import type { CarRequest } from "../types/types";
function CotizacionAutos() {
  const [data, setData] = useState<CarRequest>({
    name: "",
    surname: "",
    email: "",
    manufacturerName: "",
  });
  const { allBrands, sendCar, carRequestError, carRequestSuccess } =
    useUserStore();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("manufacturerName", data.manufacturerName);

    await sendCar(formData);
  };
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      action=""
      method="POST"
      encType="multipart/form-data"
      className=" bg-base-200 border-base-300 rounded-box border p-4 text-md flex flex-col gap-2 w-fit "
      onSubmit={handleSubmit}
    >
      {" "}
      <legend className="fieldset-legend">Formulario de cotización</legend>
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
        type="email"
        className="input"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <legend className="label">Marca de auto</legend>
      <select
        name="manufacturerName"
        value={data.manufacturerName}
        defaultValue="Pick a browser"
        className="select"
        onChange={handleChange}
      >
        <option disabled value="">
          Elige la marca
        </option>
        {allBrands.map((brand) => (
          <option key={brand.name}>{brand.name}</option>
        ))}
      </select>
      <label className="label text-sm ">Obligatorio</label>
      {carRequestSuccess.length > 0 ? (
        <p className="text-green-500">{carRequestSuccess}</p>
      ) : null}
      {carRequestError.length > 0 ? (
        <p className="text-red-500">{carRequestError}</p>
      ) : null}
      <button className="btn btn-neutral mt-4 text-lg w-80" type="submit">
        Solicitar
      </button>
    </form>
  );
}

export default CotizacionAutos;
