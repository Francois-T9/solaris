import { useEffect, useState } from "react";
import Steps from "../components/ui/steps";
import { useUserStore } from "../store/user.store";
function Cotizacion() {
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState<string>("");
  const {
    sendBill,
    billingRequestSuccess,
    billingRequestError,
    resetBillingState,
  } = useUserStore();
  useEffect(() => {
    resetBillingState();
  }, [resetBillingState]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    if (file) {
      formData.append("file", file);
    }
    await sendBill(formData);
  };

  return (
    <div className="flex flex-col items-center gap-4 ">
      <Steps />
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  ">
        <legend className="fieldset-legend">Formulario de cotización</legend>

        <form
          action=""
          method="POST"
          encType="multipart/form-data"
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 "
          onSubmit={handleSubmit}
        >
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <legend className="fieldset-legend">Recibo de luz</legend>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files![0])}
            className="file-input"
          />
          <label className="label">Formato .pdf solamente. Maximo 2 MB</label>
          {billingRequestSuccess.length > 0 ? (
            <p className="text-green-500">{billingRequestSuccess}</p>
          ) : null}
          {billingRequestError.length > 0 ? (
            <p className="text-red-500">{billingRequestError}</p>
          ) : null}

          <button className="btn btn-neutral mt-4" type="submit">
            Solicitar
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Cotizacion;
