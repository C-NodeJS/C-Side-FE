import jwtDecode from "jwt-decode";
import PropTypes from "prop-types";
import { Container, Alert, AlertTitle, Typography, Button } from "@mui/material";
import { getAccessTokenFromLS } from "../utils/auth";

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array,
  children: PropTypes.node
};

const useCurrentRole = () => {
  const access_token = getAccessTokenFromLS();

  if (!access_token) {
    return null;
  }

  const { roleId } = jwtDecode(access_token);

  return roleId;
};

export default function RoleBasedGuard({ accessibleRoles, children }) {
  const currentRole = useCurrentRole();

  if (!accessibleRoles.includes(currentRole)) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>Permission Denied</AlertTitle>
          You do not have permission to access this page
        </Alert>
        <Typography variant='h5'>Please Login Here</Typography>
        <Button variant="contained" href="/login">
          Login
        </Button>
      </Container>

    );
  }

  return <>{children}</>;
}
