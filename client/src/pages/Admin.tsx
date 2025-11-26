import EnergyRequest from "@/components/EnergyRequest";
import ChargerRequest from "@/components/ChargerRequests";
function Admin() {
  return (
    <div className="flex flex-col   items-center gap-4 ">
      <h1 className="text-2xl font-bold underline">Panel del administrador</h1>
      <h2 className="text-xl font-bold ">Solicitudes paneles</h2>
      <EnergyRequest />
      <h2 className="text-xl font-bold ">Solicitudes cargadores</h2>
      <ChargerRequest />
    </div>
  );
}

export default Admin;
