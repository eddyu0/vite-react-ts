import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { env } from "./env.ts";
import "./index.css";

async function enableMocking() {
  if (import.meta.env.MODE === "development" && env.ENABLE_MSW) {
    const { worker } = await import("./__mocks__/browser.ts");

    return worker.start();
  }
}

enableMocking()
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    console.log("App started with env", env);
  })
  .catch(console.error);
