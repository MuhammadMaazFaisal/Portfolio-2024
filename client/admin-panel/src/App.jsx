import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Analytics from "./pages/Analytics";
import BlogListing from "./pages/blog/BlogListing";
import Signin from "./pages/Signin";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated && user.email !== "m.maazfaisal0301@gmail.com") {
    // logout user if not admin
    logout({ returnTo: window.location.origin });
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return element;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
        prompt: "select_account",
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          exact
          path="/"
          element={<ProtectedRoute element={<Analytics />} />}
        />
        <Route
          path="/blogs"
          element={<ProtectedRoute element={<BlogListing />} />}
        />
      </Routes>
    </Auth0Provider>
  );
}

export default App;
