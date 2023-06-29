import axios from "axios";

export async function postUserData(userData) {
  try {
    const response = await axios.post("/api/user", userData);
    console.log(response.data);
    // Handle any further actions after successful posting
  } catch (error) {
    console.error("Error posting user data:", error);
    // Handle any error cases
  }
}
