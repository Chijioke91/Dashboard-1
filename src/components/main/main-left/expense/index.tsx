import { previousExpenses, todayExpenses } from '../../../../utils';
import ExpenseHeader from './ExpenseHeader';
import ShowExpense from './ShowExpense';

const ExpensesDefault = () => {
  return (
    <>
      {/* Today */}
      <div className="mt-[47px] mb-[59px]">
        <ExpenseHeader title="Today" />
        <ShowExpense expenses={todayExpenses} />
      </div>
      {/* previous */}
      <div className="my-[59px]">
        <ExpenseHeader title="Monday, 23 March 2020" />
        <ShowExpense expenses={previousExpenses} />
      </div>
    </>
  );
};

export default ExpensesDefault;
