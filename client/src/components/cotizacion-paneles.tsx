import { useEffect, useState } from "react";
import { useUserStore } from "../store/user.store";
import type { BillRequest } from "../types/types";

function CotizacionPaneles() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<BillRequest>({
    name: "",
    surname: "",
    email: "",
  });
  const {
    sendBill,
    billingRequestSuccess,
    billingRequestError,
    resetBillingState,
  } = useUserStore();
  useEffect(() => {
    resetBillingState();
  }, [resetBillingState]);
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    if (file) {
      formData.append("file", file);
    }
    await sendBill(formData);
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
      <legend className="label">Recibo de luz</legend>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files![0])}
        className="file-input"
      />
      <label className="label text-sm">
        Formato .pdf solamente. Maximo 2 MB
      </label>
      {billingRequestSuccess.length > 0 ? (
        <p className="text-green-500">{billingRequestSuccess}</p>
      ) : null}
      {billingRequestError.length > 0 ? (
        <p className="text-red-500">{billingRequestError}</p>
      ) : null}
      <button className="btn btn-neutral mt-4 text-lg w-80 " type="submit">
        Solicitar
      </button>
    </form>
  );
}

export default CotizacionPaneles;
