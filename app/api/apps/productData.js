import imgApi from '../images/photos';
import r1 from '../../api/apps/r1.jpg';
import r2 from '../../api/apps/r2.png';
import r3 from '../../api/apps/r3.jpg';
import r4 from '../../api/apps/r4.jpg';
import r9 from '../../api/apps/r9.jpg';
import r10 from '../../api/apps/r10.jpg';
const productData = [
  {
    id: '7',
    name: 'Difficult exercises',
    thumbnail: r10,
    desc: 'This exercises only assign for good student in grade 8.',
    ratting: 5,
    price: 20,
    prevPrice: 16,
    discount: '20%',
    soldout: false,
  },
  {
    id: '8',
    name: 'Video lectures',
    thumbnail: r3,
    desc: 'Video about chapter 9 & 10 for 7B.',
    ratting: 1,
    price: 30,
    prevPrice: 0,
    discount: '',
    soldout: false,
  }
];

export default productData;
