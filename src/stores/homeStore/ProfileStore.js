import { makeAutoObservable } from "mobx";

class ProfileStore {
  firstName = "Ahmad";
  lastName = "Shan";
  email = "ahmad@gmail.com";

  constructor() {
    makeAutoObservable(this);
  }

  updateProfile(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

const profileStore = new ProfileStore();
export default profileStore;
