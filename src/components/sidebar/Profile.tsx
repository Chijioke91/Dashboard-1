import Samantha from '../../assets/png/samantha.png';

const Profile = () => {
  return (
    <>
      <div className="space-y-2 flex flex-col mt-11">
        <div className="relative w-17 h-17">
          <img src={Samantha} alt="Samantha Pics" />
          <p className="absolute -right-4 -top-1 flex items-center justify-center bg-red-600 w-7 h-7  text-white rounded-full">
            4
          </p>
        </div>
        <h2 className="text-3xl">Samantha</h2>
        <p className="text-lg text-gray-400 font-normal">samantha@gmail.com</p>
      </div>
    </>
  );
};

export default Profile;
