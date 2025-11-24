import Steps from "../components/ui/steps";
import CotizacionPaneles from "../components/cotizacion-paneles";
import CotizacionAutos from "../components/cotizacion-autos";
function Cotizacion() {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <h1 className="text-2xl font-bold underline">¿Cómo funciona?</h1>
      <Steps />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift ">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Paneles"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-4   ">
          <CotizacionPaneles />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Cargadores eléctricos"
        />
        <div className="tab-content bg-base-100 border-base-300 p-4  ">
          <CotizacionAutos />
        </div>
      </div>
    </div>
  );
}

export default Cotizacion;
