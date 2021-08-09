import cartIcon from '../assets/svg/cartIcon.svg';
import transportIcon from '../assets/svg/transportIcon.svg';
import houseIcon from '../assets/svg/houseIcon.svg';
import playIcon from '../assets/svg/play.svg';
import plateIcon from '../assets/svg/plate.svg';

export type Expense = {
  id: number;
  expense: string;
  time: string;
  location: string;
  price: number;
  icon: string;
  iconBackgroundColor: string;
}[];

const todayExpenses: Expense = [
  {
    id: 1,
    expense: 'Grocery',
    time: '5:12 pm',
    location: 'Belanja di pascar',
    price: 326.8,
    icon: cartIcon,
    iconBackgroundColor: 'bg-[#32A7E2]',
  },
  {
    id: 2,
    expense: 'Transportation',
    time: '5:12 pm',
    location: 'Naik bus umum',
    price: 15.0,
    icon: transportIcon,
    iconBackgroundColor: 'bg-[#B548C6]',
  },
  {
    id: 3,
    expense: 'Housing',
    time: '5:12 pm',
    location: 'Bayar Listrik',
    price: 185.75,
    icon: houseIcon,
    iconBackgroundColor: 'bg-[#FF8700]',
  },
];

const previousExpenses: Expense = [
  {
    id: 1,
    expense: 'Food and Drink',
    time: '5:12 pm',
    location: 'Makan Steak',
    price: 156.0,
    icon: plateIcon,
    iconBackgroundColor: 'bg-[#DC3434]',
  },
  {
    id: 2,
    expense: 'Entertainment',
    time: '5:12 pm',
    location: 'Nonton Bioskop',
    price: 35.2,
    icon: playIcon,
    iconBackgroundColor: 'bg-[#4BA83D]',
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
