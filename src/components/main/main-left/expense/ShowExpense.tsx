import { Expense } from '../../../../utils';

type IProps = {
  expenses: Expense;
};

const ShowExpense = ({ expenses }: IProps) => {
  return (
    <div className="space-y-6">
      {expenses.map((item) => (
        <div className="flex items-start justify-between" key={item.id}>
          {/* left */}
          <div className="flex">
            <span
              className={`flex flex-col items-center justify-center text-white rounded-full h-12 w-12 ${item.iconBackgroundColor}`}
            >
              <img className="w-5 h-4" src={item.icon} alt={item.expense} />
            </span>

            <div className="flex flex-col ml-4 space-y-1">
              <h3 className="font-medium text-base">{item.expense}</h3>
              <div className="flex items-center text-sm tracking-wider text-gray-400 space-x-2">
                <span>{item.time}</span>
                <span className="block text-lg bg-gray-400 rounded-full h-1 w-1"></span>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
          <div>
            <span className="font-semibold text-base">
              {' '}
              - {item.price.toFixed(3)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowExpense;
