import p1 from '../../../assets/png/p1.png';
import p2 from '../../../assets/png/p2.png';
import p3 from '../../../assets/png/p3.png';
import add from '../../../assets/png/plus.png';

const Header = () => {
  return (
    <div className="flex justify-between items-start">
      {/* title*/}
      <div className="space-y-4">
        <h1 className="text-5xl font-semibold">Expenses</h1>
        <p className="text-lg text-gray-400 font-normal tracking-wider">
          01 -25 March, 2020
        </p>
      </div>
      {/* people and plus sign */}
      <div className="flex items-center space-x-3 ">
        <div className="flex -space-x-1">
          <div className="h-9 w-9 rounded-full overflow-hidden z-30">
            <img src={p1} alt="person 1" />
          </div>
          <div className="h-9 w-9 rounded-full overflow-hidden z-20">
            <img src={p2} alt="person 2" />
          </div>
          <div className="h-9 w-9 rounded-full overflow-hidden z-10">
            <img src={p3} alt="person 3" />
          </div>
        </div>
        <div className="h-7 w-7 flex items-center justify-center border-2 rounded-full">
          <img className="h-3 w-3" src={add} alt="Add Person" />
        </div>
      </div>
    </div>
  );
};

export default Header;
