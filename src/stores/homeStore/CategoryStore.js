import { makeAutoObservable } from "mobx";
import courseBooksImage from '../../assets/jhjh.jpg';
import novelsImage from '../../assets/hjhjjhd.jpg';
import poetryImage from '../../assets/poe.jpg';
import fantasyImage from '../../assets/rtrtrt.jpg';

class CategoryStore {
  categories = [
    { id: 1, name: "Course Books", image: courseBooksImage },
    { id: 2, name: "Novels", image: novelsImage },
    { id: 3, name: "Poetry", image: poetryImage },
    { id: 4, name: "Fantasy", image: fantasyImage }
  ];

  selectedCategory = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectCategory = (category) => {
    this.selectedCategory = category;
  };
}

const categoryStore = new CategoryStore();
export default categoryStore;
