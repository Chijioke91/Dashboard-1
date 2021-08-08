import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';

const Expenses = () => {
  return (
    <div className="flex text-gray-200 min-h-screen h-screen">
      {/* Side bar */}

      <Sidebar />

      {/* Main Content */}

      <MainContent />
    </div>
  );
};

export default Expenses;
