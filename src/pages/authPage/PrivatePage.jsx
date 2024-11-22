import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivatePage({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (isLoggedIn === null) {
    return <div>Loading... Please wait...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to={"/sign-in"} replace />;
  }

  return children;
}

export default PrivatePage;
