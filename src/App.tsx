import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { GlobalCss } from "./styles";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LaDolceVitaTrattoria from "./MenuList";
import { itensDoMenu } from "./pages/LaDolceVitaTrattoria/PaginaLaDolceVita";

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/ladolcevita',
    element: <LaDolceVitaTrattoria menu={itensDoMenu} />
  }
]);


function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  );
}


export default App;
