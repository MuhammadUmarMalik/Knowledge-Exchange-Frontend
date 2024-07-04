import { makeAutoObservable } from "mobx";
import courseBooksImage from '../../assets/jhjh.jpg';
import novelsImage from '../../assets/hjhjjhd.jpg';
import poetryImage from '../../assets/poe.jpg';
import fantasyImage from '../../assets/rtrtrt.jpg';
import Psychology from '../../assets/phys.jpg';
import Physics from '../../assets/ph.jpg';
import  C from '../../assets/cod.jpg';
import Chemistry from '../../assets/chem.jpg';
import Business from '../../assets/bui.jpg';
import Calculus from '../../assets/cal.jpg';
import Botany from '../../assets/bot.jpg';
import English from '../../assets/eng.jpg';


class CategoryStore {
  categories = [
    {
      id: 1,
      name: "Course Books",
      image: courseBooksImage,
      subcategories: [
        { id: 1, name: "Psychology", image: Psychology }, 
        { id: 2, name: "Physics", image: Physics },
        { id: 3, name: "C++", image:  C  },
        { id: 4, name: "Chemistry", image: Chemistry },
        { id: 5, name: "Business", image: Business }, 
        { id: 6, name: "Calculus", image: Calculus },
        { id: 7, name: "Botany", image: Botany },
        { id: 8, name: "English", image: English },
      ]
    },
    {
      id: 2,
      name: "Novels",
      image: novelsImage,
      subcategories: [
        { id: 4, name: "Historical", image: '/path/to/historical/image.jpg' },
        { id: 5, name: "Romance", image: '/path/to/romance/image.jpg' },
        { id: 6, name: "Mystery", image: '/path/to/mystery/image.jpg' },
      ]
    },
    {
      id: 3,
      name: "Poetry",
      image: poetryImage,
      subcategories: [
        { id: 7, name: "Yaani", image: '/path/to/yaani/image.jpg' },
        { id: 8, name: "Diwane Galib", image: '/path/to/diwane_galib/image.jpg' },
        { id: 9, name: "Israr e Khudi", image: '/path/to/israr_e_khudi/image.jpg' },
        { id: 10, name: "Lekin", image: '/path/to/lekin/image.jpg' },
        { id: 11, name: "Shiad", image: '/path/to/shiad/image.jpg' },
        { id: 12, name: "Shab o raaz", image: '/path/to/shab_o_raaz/image.jpg' },
        { id: 13, name: "Ihsaas", image: '/path/to/ihsaas/image.jpg' },
        { id: 14, name: "Bang e dra", image: '/path/to/bang_e_dra/image.jpg' },
      ]
    },
    {
      id: 4,
      name: "Fantasy",
      image: fantasyImage,
      subcategories: [
        { id: 15, name: "Epic", image: '/path/to/epic/image.jpg' },
        { id: 16, name: "Urban", image: '/path/to/urban/image.jpg' },
        { id: 17, name: "Dark", image: '/path/to/dark/image.jpg' },
      ]
    }
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
