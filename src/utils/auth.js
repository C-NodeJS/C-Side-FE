export const setAccessTokenToLS = (access_token) =>
  localStorage.setItem("access_token", access_token);

export const getAccessTokenFromLS = () =>
  localStorage.getItem("access_token") || "";

export const clearAccessTokenFromLS = () =>
  localStorage.removeItem("access_token");

export const getRefreshTokenFromLS = () =>
  localStorage.getItem("refresh_token");
