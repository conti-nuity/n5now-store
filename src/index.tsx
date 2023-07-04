import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routes/";
import GlobalStyle from "./styles";
import Theme from "./layouts/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <Routing />
    </Theme>
  </React.StrictMode>
);
