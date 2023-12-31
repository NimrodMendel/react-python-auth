import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "rsuite/dist/rsuite.min.css";
import { Provider } from "react-redux";
import store from "./app/store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
