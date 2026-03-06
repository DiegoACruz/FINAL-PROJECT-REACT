// Importamos React
import React from "react";
import ReactDOM from "react-dom/client";

// Importamos Provider de Redux
import { Provider } from "react-redux";

// Importamos el store
import store from "./pages/CartSlice";

// Importamos App
import App from "./App";

// Creamos la raíz de React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizamos la aplicación
root.render(
  <React.StrictMode>

    {/* Provider permite que Redux funcione en toda la app */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);