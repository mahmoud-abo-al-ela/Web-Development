import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpiration = localStorage.getItem("expires");
  const expirationDate = new Date(storedExpiration);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();
  if (!token) {
    return null;
  }
  if (token && tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAutLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
