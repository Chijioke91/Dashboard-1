import MainContent from '../components/main/MainContent';
import Sidebar from '../components/sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex text-gray-200 min-h-screen h-screen">
      {/* Side bar */}

      <Sidebar />

      {/* Main Content */}

      <MainContent />
    </div>
  );
};

export default Dashboard;
