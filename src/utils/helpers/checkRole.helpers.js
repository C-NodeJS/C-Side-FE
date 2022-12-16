import jwtDecode from "jwt-decode";
import { SYSTEM_ADMIN, HOST } from "../../constants/index";

export const checkRole = (access_token, navigate) => {
    const { roleId } = jwtDecode(access_token);
    console.log("🚀 ~ file: checkRole.helpers.js:6 ~ checkRole ~ roleId", roleId)

    if (roleId === SYSTEM_ADMIN) {
        navigate("/admin", { replace: true });
    }
    else if (roleId === HOST) {
        navigate("/manager", { replace: true });
    }
    else {
        navigate("/client", { replace: true });
    } 
};
