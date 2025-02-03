import { apiInstance } from "@utils/axiosInstance";
import { redirect } from "react-router-dom";

export async function logoutAction() {
  try {
    await apiInstance.post("/logout");
    console.log("Logout API call success");
  } catch (err) {
    console.error("Logout API call failed", err);
  }

  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
}
