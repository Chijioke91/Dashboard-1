import AbsoluteMain from '../components/AbsoluteMain';

const Dashboard = () => {
  return (
    <div className="flex text-gray-200 min-h-screen h-screen">
      <AbsoluteMain>
        <main className="w-4/5 bg-gray-700 text-gray-200 overflow-hidden rounded-3xl">
          <div className="p-28">
            <h1 className="text-5xl font-semibold">Dashboard</h1>
          </div>
        </main>
      </AbsoluteMain>
    </div>
  );
};

export default Dashboard;
