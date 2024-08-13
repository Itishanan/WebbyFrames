const UsersCountry = () => {
  return (
    <div>
      <div className="row-span-12 col-span-2 h-full bg-white p-5">
        <h1 className="text-lg font-bold pb-2">Users By Country </h1>
        <div>
          <ul className="gap-3">
            <li className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src="./icons/flags/us.png"></img>
                <p>United States</p>
              </div>
              <div className="flex gap-5">
                <p>27.5%</p>
                <span className="text-gray-600">4.5M</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src="./icons/flags/au.png"></img>
                <p>Austraila </p>
              </div>
              <div className="flex gap-5">
                <p>11.3%</p>
                <span className="text-gray-600">2.3M</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src="./icons/flags/cn.png"></img>
                <p>China</p>
              </div>
              <div className="flex gap-5">
                <p>9.4%</p>
                <span className="text-gray-600">2M</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src="./icons/flags/de.png"></img>
                <p>Germany</p>
              </div>
              <div className="flex gap-5">
                <p>8%</p>
                <span className="text-gray-600">1.7m</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src="./icons/flags/ro.png"></img>
                <p>Romania</p>
              </div>
              <div className="flex gap-5">
                <p>7.9%</p>
                <span className="text-gray-600">1.6M</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src="./icons/flags/jp.png"></img>
                <p>Japan</p>
              </div>
              <div className="flex gap-5">
                <p>6.5%</p>
                <span className="text-gray-600">1.2M</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src="./icons/flags/nl.png"></img>
                <p>NetherLand</p>
              </div>
              <div className="flex gap-5">
                <p>5.9%</p>
                <span className="text-gray-600">1M</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UsersCountry;
