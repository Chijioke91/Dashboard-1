import BarChart from './BarChart';
import Header from './Header';
import Expense from './expense';

const MainLeft = () => {
  return (
    <div className="p-28">
      <Header />
      <BarChart />
      <Expense />
    </div>
  );
};

export default MainLeft;
