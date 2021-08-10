import { spendCategories } from '../../../utils';

const Top = () => {
  return (
    <div className="pt-[76px] pb-[100px]">
      <h1 className="text-xl font-semibold mb-[44px]">Where your money go</h1>

      <ul className="space-y-[30px] mb-[67.12px]">
        {spendCategories.map((category) => {
          const width = `${
            (category.price /
              spendCategories.reduce(
                (acc, current) => acc + current.price,
                0
              )) *
            100
          }%`;

          return (
            <li className="flex flex-col" key={category.id}>
              <div className="flex justify-between items-start text-[13px] text-[#273240]">
                <span>{category.category}</span>
                <span>{category.price.toFixed(3)}</span>
              </div>
              <div
                className="relative bg-[#ECEFF5] flex items-center "
                style={{ width: '100%', height: '5px' }}
              >
                <span
                  style={{
                    height: '5px',
                    width,
                  }}
                  className="absolute bg-[#31BA96]"
                ></span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Top;
