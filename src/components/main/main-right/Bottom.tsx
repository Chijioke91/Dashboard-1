import box from '../../../assets/png/boxes.png';
import plant from '../../../assets/png/plant.png';

const Bottom = () => {
  return (
    <div className="relative h-[258px] w-[100%] bg-[#EDF0F6] rounded-2xl">
      <img
        src={box}
        alt="box"
        className="absolute left-6 -top-3 h-[72.43px] w-[84.15px]"
      />
      <img
        src={plant}
        alt="plant"
        className="absolute right-6 -top-8 h-[90px] w-[52.25px]"
      />

      <div className="absolute left-6 top-24">
        <h1 className="font-semibold text-[#273240] text-base">
          Save more money
        </h1>
        <p className="w-[350px] h-[63px] text-xs font-normal tracking-wider">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>

        <button className="bg-[#101010] w-[200px]  text-white px-5 py-3 rounded-xl">
          View Tips
        </button>
      </div>
    </div>
  );
};

export default Bottom;
