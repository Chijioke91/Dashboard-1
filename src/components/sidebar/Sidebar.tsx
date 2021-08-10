import Nav from './Nav';
import Profile from './Profile';

const Sidebar = () => {
  return (
    <div className="w-1/5 flex flex-col mr-[83px] ml-[80px]">
      <Profile />
      <Nav />
    </div>
  );
};

export default Sidebar;
