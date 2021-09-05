export default function logout() {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("expires");
  } else if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("expires");
  }
}
