import React, { useContext } from "react";
import { FirebaseAuth } from "./provider/AuthProvider";
import Routes from "./routes/Routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
