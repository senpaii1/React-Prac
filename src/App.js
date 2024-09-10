import React, { useState } from "react";
import Counter from "./Pages/Counter";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the home page!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the about page.</p>
  </div>
);

// A simple mock authentication function
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

const ProtectedRoute = ({ element: Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

const App = () => {
  const auth = useAuth();
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/counter">Counter Page</Link>
            </li>
          </ul>
        </nav>

        <div>
          {auth.isAuthenticated ? (
            <button onClick={auth.logout}>Logout</button>
          ) : (
            <button onClick={auth.login}>Login</button>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/counter"
            element={
              <ProtectedRoute
                element={Counter}
                isAuthenticated={auth.isAuthenticated}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
