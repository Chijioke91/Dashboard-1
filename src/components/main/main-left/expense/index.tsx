import { previousExpenses, todayExpenses } from '../../../../utils';
import ExpenseHeader from './ExpenseHeader';
import ShowExpense from './ShowExpense';

const ExpensesDefault = () => {
  return (
    <>
      {/* Today */}
      <div className="mt-12 mb-14">
        <ExpenseHeader title="Today" />
        <ShowExpense expenses={todayExpenses} />
      </div>
      {/* previous */}
      <div className="mt-12 mb-14">
        <ExpenseHeader title="Monday, 23 March 2020" />
        <ShowExpense expenses={previousExpenses} />
      </div>
    </>
  );
};

export default ExpensesDefault;
