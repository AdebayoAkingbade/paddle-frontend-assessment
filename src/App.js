import React from "react";
import AppRouter from "./routes";

import "./assets/scss/app.scss";

const App = () => {
  return (
    <div
      style={{ backgroundImage: "url('/assets/images/bg.png')" }}
      className="app"
    >
      <AppRouter />
    </div>
  );
};

export default App;
