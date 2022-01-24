/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

// dotenv.config({ path: "../config.env" });

export const login = async (email, password) => {
  try {
    // console.log("Port, login..");
    // console.log(process.env.PORT);
    const response = await axios({
      method: "POST",
      url: "http://localhost:8001/api/v1/users/login",
      data: {
        email,
        password
      }
    });

    if (response.data.status === "success") {
      showAlert("success", "Logged in successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (error) {
    showAlert("error", error.response.data.message);
  }
};

export const logout = async () => {
  console.log("Logging out");
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:8001/api/v1/users/logout"
    });

    if (response.data.status === "success")
      // location.reload(true);
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
  } catch (error) {
    showAlert("error", "Error loging out");
  }
};
