import React from "react";
import { Button } from "@mui/material";
import { clearAccessTokenFromLS } from "../../utils/auth";
import { useNavigate, Navigate } from "react-router-dom";

export default function Client() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // await authAPI.logout();
    clearAccessTokenFromLS();
    return navigate("/login", { replace: true });
  };

  return (
    <div>
      Client
      <Button
        sx={{
          textTransform: "capitalize",
          padding: "15px 0",
          fontSize: "16px",
          margin: "0 auto",
          mt: "30px",
          display: "flex",
          width: "20%",
          justifyContent: "center",
        }}
        variant="contained"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
