import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cotizacion from "./pages/Cotizacion";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Admin from "./pages/Admin";
import { useUserStore } from "./store/user.store";
import { useEffect, useState } from "react";
import Paquetes from "./pages/Paquetes";
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
  const { getBills, getCarBrands } = useUserStore();
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      await Promise.all([getBills(), getCarBrands()]);

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
