import jwtDecode from 'jwt-decode';
import { SYSTEM_ADMIN, HOST } from '../../constants/index';

export const checkRole = (access_token, navigate) => {
    const { roleId } = jwtDecode(access_token);

    if (roleId === SYSTEM_ADMIN) {
        navigate("/host", { replace: true });
    }
    else if (roleId === HOST) {
        navigate("/manager", { replace: true });
    }
    else {
        navigate("/client", { replace: true });
    } 
};
