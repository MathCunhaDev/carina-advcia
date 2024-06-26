import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "G-6DQ5X9MC0Y",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
