import { makeObservable, observable, action, runInAction } from "mobx";
import { SC } from "../../Services/serverCall";

class TutorStore {
  tutors = [];
  selectedTutor = null;
  loading = false;
  error = null;

  constructor() {
    makeObservable(this, {
      tutors: observable,
      selectedTutor: observable,
      loading: observable,
      error: observable,
      fetchTutors: action,
      getTutor: action,
      selectTutor: action,
      setLoading: action,
      setError: action,
    });
  }

  async fetchTutors() {
    this.setLoading(true);
    try {
      const response = await SC.getCall("/customer/tutors");
      runInAction(() => {
        this.tutors = response.data.data;
        this.setError(null);
      });
    } catch (error) {
      runInAction(() => {
        this.setError(error.message || "Failed to fetch tutors");
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async getTutor(id) {
    this.setLoading(true);
    try {
      const response = await SC.getCall(`/tutors/${id}`);
      runInAction(() => {
        this.selectedTutor = response.data.data;
        this.setError(null);
      });
    } catch (error) {
      runInAction(() => {
        this.setError(error.message || "Failed to fetch tutor details");
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  selectTutor(id) {
    const tutor = this.tutors.find((t) => t.id === id);
    if (tutor) {
      this.selectedTutor = tutor;
    }
  }

  setLoading(value) {
    this.loading = value;
  }

  setError(error) {
    this.error = error;
  }
}

const tutorStore = new TutorStore();
export default tutorStore;
