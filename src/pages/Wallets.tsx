import AbsoluteMain from '../components/AbsoluteMain';

const Wallets = () => {
  return (
    <div className="flex text-gray-200 min-h-screen h-screen pr-5 py-5">
      <AbsoluteMain>
        <main className="w-4/5 bg-gray-700 text-gray-200 overflow-hidden rounded-3xl">
          <div className="p-28">
            <h1 className="text-5xl font-semibold">Wallets</h1>
          </div>
        </main>
      </AbsoluteMain>
    </div>
  );
};

export default Wallets;
