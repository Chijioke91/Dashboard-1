import AbsoluteMain from '../components/AbsoluteMain';
import MainContent from '../components/main/MainContent';

const Expenses = () => {
  return (
    <div className="flex text-gray-200 min-h-screen h-screen">
      <AbsoluteMain>
        <MainContent />
      </AbsoluteMain>
    </div>
  );
};

export default Expenses;
