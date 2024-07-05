import { makeAutoObservable } from "mobx";
import { SC } from "../../Services/serverCall";

class ProfileStore {
  firstName = "";
  email = "";

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCustomerData() {
    try {
      const response = await SC.getCall("/customer");
      console.log("API Response:", response.data.data.user); // Log the entire response data

      if (response.status === 200) {
        if (response.data.data.user) {
          const { name, email } = response.data.data.user;
          this.firstName = name;
          this.email = email;
        } else {
          console.error("User data not found in response:", response.data.data);
          // Handle case where user data is missing or undefined
        }
      } else {
        console.error("Failed to fetch customer data:", response.status);
        // Optionally handle error state or retry logic here
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      // Handle network or other errors here
    }
  }
}

const profileStore = new ProfileStore();
export default profileStore;
