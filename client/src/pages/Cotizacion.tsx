import Steps from "../components/ui/steps";
function Cotizacion() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Steps />
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Formulario de cotizacion</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <legend className="fieldset-legend">Recibo de luz</legend>
        <input type="file" className="file-input" />
        <label className="label">Max size 2MB</label>

        <button className="btn btn-neutral mt-4">Solicitar</button>
      </fieldset>
    </div>
  );
}

export default Cotizacion;
