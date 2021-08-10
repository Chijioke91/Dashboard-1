import BarChart from './BarChart';
import Header from './Header';
import Expense from './expense';

const MainLeft = () => {
  return (
    <div className="px-[100px] pt-[60px] pb-[59px]">
      <Header />
      <BarChart />
      <Expense />
    </div>
  );
};

export default MainLeft;
