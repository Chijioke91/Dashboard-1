import BarChart from './BarChart';
import Header from './Header';
import ExpensesToday from './today-expenses';

const MainLeft = () => {
  return (
    <div className="p-28">
      <Header />
      <BarChart />
      <ExpensesToday />
    </div>
  );
};

export default MainLeft;
