import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contacto";
import Cotizacion from "./pages/Cotizacion";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Paquetes from "./pages/Paquetes";
import { useFlagsStore } from "./store/flags.store";
import { useUserStore } from "./store/user.store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cotizacion",
        element: <Cotizacion />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/paquetes",
        element: <Paquetes />,
      },
    ],
  },
]);
function App() {
  const { getCarBrands } = useUserStore();
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  const { fetchFlags } = useFlagsStore();
  useEffect(() => {
    const init = async () => {
      await Promise.all([getCarBrands(), fetchFlags()]);

      setIsAppReady(true);
    };

    init();
  }, []);

  if (isAppReady) {
    return <RouterProvider router={router} />;
  } else {
    return (
      <div className="min-w-screen min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
}

export default App;
