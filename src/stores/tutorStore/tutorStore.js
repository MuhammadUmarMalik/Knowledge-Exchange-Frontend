import { makeObservable, observable, action } from 'mobx';

class TutorStore {
  selectedTutorId = null;

  constructor() {
    makeObservable(this, {
      selectedTutorId: observable,
      selectTutor: action,
    });
  }

  selectTutor(id) {
    this.selectedTutorId = id;
  }
}

const tutorStore = new TutorStore();
export default tutorStore;