import { DotsHorizontalIcon } from '@heroicons/react/outline';

type IProps = {
  title: string;
};

const ExpenseHeader = ({ title }: IProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">{title}</h1>
        <DotsHorizontalIcon className="h2 w-7 text-gray-300" />
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default ExpenseHeader;
