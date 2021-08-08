const MainContent = () => {
  return (
    <main className="w-4/5 overflow-hidden flex rounded-3xl">
      <div className="w-2/3 bg-white">Left</div>

      <div className="w-1/3 bg-mainRight">Right</div>
    </main>
  );
};

export default MainContent;