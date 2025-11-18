import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cotizacion from "./pages/Cotizacion";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
