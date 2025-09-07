import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import AppRoutes from "./AppRoutes";
import SyncUser from "./components/SyncUser";
import Login from "./components/Login";

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <Router>
          <Navbar />
          <AppRoutes />
          <SyncUser />
        </Router>
      ) : (
        <button onClick={() => loginWithRedirect()}>
          <Login />
        </button>
      )}
    </div>
  );
}

export default App;
