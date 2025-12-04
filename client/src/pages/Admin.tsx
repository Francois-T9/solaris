import ChargerRequest from "@/components/ChargerRequests";
import EnergyRequest from "@/components/EnergyRequest";
import { Login } from "@/components/forms/login";
import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
function Admin() {
  const { isAuth, ensureAuth } = useAuthStore();
  // const { getBills, getChargerRequests } = useUserStore();

  // useEffect(() => {
  //   const init = async () => {
  //     await Promise.all([getBills(), getChargerRequests()]);
  //   };

  //   init();
  // }, []);
  useEffect(() => {
    ensureAuth();
  }, [isAuth]);
  return (
    <div className="flex flex-col   items-center gap-4 ">
      {!isAuth && <Login />}
      <h1 className="text-2xl font-bold underline">Panel del administrador</h1>
      <h2 className="text-xl font-bold ">Solicitudes paneles</h2>
      <EnergyRequest />
      <h2 className="text-xl font-bold ">Solicitudes cargadores</h2>
      <ChargerRequest />
    </div>
  );
}

export default Admin;
