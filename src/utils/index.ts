import cartIcon from '../assets/svg/cartIcon.svg';
import transportIcon from '../assets/svg/transportIcon.svg';
import houseIcon from '../assets/svg/houseIcon.svg';

const todayExpenses = [
  {
    id: 1,
    expense: 'Grocery',
    time: '5:12 pm',
    location: 'Belanja di pascar',
    price: 326.8,
    icon: cartIcon,
    iconBackgroundColor: 'bg-grocery',
  },
  {
    id: 2,
    expense: 'Transportation',
    time: '5:12 pm',
    location: 'Naik bus umum',
    price: 15.0,
    icon: transportIcon,
    iconBackgroundColor: 'bg-transport',
  },
  {
    id: 3,
    expense: 'Housing',
    time: '5:12 pm',
    location: 'Bayar Listrik',
    price: 185.75,
    icon: houseIcon,
    iconBackgroundColor: 'bg-housing',
  },
];

const previousExpenses = [
  {
    id: 1,
    expense: 'Food and Drink',
    time: '5:12 pm',
    location: 'Makan Steak',
    price: 156.0,
    icon: cartIcon,
    iconBackgroundColor: 'bg-grocery',
  },
  {
    id: 2,
    expense: 'Entertainment',
    time: '5:12 pm',
    location: 'Nonton Bioskop',
    price: 35.2,
    icon: transportIcon,
    iconBackgroundColor: 'bg-entertainment',
  },
];

const spendCategories = [
  {
    id: 1,
    category: 'Food and Drinks',
    price: 872.4,
  },
  {
    id: 2,
    category: 'Shopping',
    price: 1378.2,
  },
  {
    id: 3,
    category: 'Housing',
    price: 928.5,
  },
  {
    id: 4,
    category: 'Transportation',
    price: 420.7,
  },
  {
    id: 5,
    category: 'Vehicle',
    price: 520,
  },
];

export { todayExpenses, previousExpenses, spendCategories };
