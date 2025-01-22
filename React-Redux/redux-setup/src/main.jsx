import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store";
import { Provider } from "react-redux";
import { ContextProvider } from "./MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>
);
