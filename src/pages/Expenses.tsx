import AbsoluteMain from '../components/AbsoluteMain';
import MainContent from '../components/main/MainContent';

const Expenses = () => {
  return (
    <div className="flex text-gray-200 min-h-screen h-screen pr-5 py-5">
      <AbsoluteMain>
        <MainContent />
      </AbsoluteMain>
    </div>
  );
};

export default Expenses;
