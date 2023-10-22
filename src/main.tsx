import "@styles/globals.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import { Root } from "@components/root/Root";
import { storeClient } from "@src/redux";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <ReduxProvider store={storeClient}>
      <Root />
    </ReduxProvider>
  </React.StrictMode>
);
