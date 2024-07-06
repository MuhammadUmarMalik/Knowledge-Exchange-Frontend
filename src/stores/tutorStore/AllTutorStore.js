import { makeAutoObservable, runInAction } from "mobx";
import { SC } from '../../Services/serverCall'; // Import your API service

class AllTutorStore {
  tutors = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchTutors() {
    try {
      const response = await SC.getCall('/customer/tutors'); // Fetch tutors from the API
      runInAction(() => {
        this.tutors = response.data || []; // Ensure tutors is an array
      });
    } catch (error) {
      console.error('Failed to fetch tutors', error);
    }
  }
}

const tutorStore = new AllTutorStore();
export default tutorStore;
