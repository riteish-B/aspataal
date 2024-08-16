import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { NextUIProvider } from "@nextui-org/react";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider className="w-full h-full">
      <main className="dark w-full h-full">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>
);
