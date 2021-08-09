import MainLeft from './main-left';

const MainContent = () => {
  return (
    <main className="w-4/5 overflow-hidden flex rounded-3xl text-black">
      <div className="w-2/3 bg-white">
        <MainLeft />
      </div>

      <div className="w-1/3 bg-mainRight">Right</div>
    </main>
  );
};

export default MainContent;
