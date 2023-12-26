import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//Importo los componentes
import Home from './routes/home';
import Libros from './routes/libros';
import Buscar from './routes/buscar';
import Agregar from './routes/agregar';
import Eliminar from './routes/eliminar';

//Creacion de Rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>No existe el link</h1>
  },
  {
    path: "/libros",
    element: <Libros />
  },
  {
    path: "/buscar",
    element: <Buscar />
  },
  {
    path: "/agregar",
    element: <Agregar />
  },
  {
    path: "/eliminar",
    element: <Eliminar />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
