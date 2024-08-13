import GaugeComponent from "./components/graphs/gauge";
import Polar from "./components/graphs/polar";
import Radar from "./components/graphs/radar";
import UsersCountry from "./components/graphs/userscountry";

const Overview = () => {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-span-8 gap-5">
        {/* Total Users */}
        <div className="bg-white p-5">
          <p className="text-gray-600">Users Total</p>
          <div className="flex justify-between">
            <h2 className="text-3xl">11.8m</h2>
            <span className="bg-gray-200 text-xs p-2 text-black rounded-full flex items-center">
              +2.5%
            </span>
          </div>
        </div>

        {/* New Users */}
        <div className="bg-white p-5">
          <p className="text-gray-600">New Users</p>
          <div className="flex justify-between">
            <h2 className="text-3xl">8.236k</h2>
            <span className="bg-gray-400 p-2 text-xs text-white rounded-full flex items-center">
              -1.2%
            </span>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white p-5">
          <p className="text-gray-600">Active Users</p>
          <div className="flex justify-between">
            <h2 className="text-3xl">2.35m</h2>
            <span className="bg-gray-200 text-xs p-2 text-black rounded-full flex items-center">
              +11%
            </span>
          </div>
        </div>

        {/* New Users (Repeated) */}
        <div className="bg-white p-5">
          <p className="text-gray-600">New Users</p>
          <div className="flex justify-between">
            <h2 className="text-3xl">8k</h2>
            <span className="bg-gray-200 text-xs p-2 text-black rounded-full flex items-center">
              +5.2%
            </span>
          </div>
        </div>

        {/* Target */}
        <div className="bg-white p-5 row-span-12 md:col-span-2 lg:col-span-1">
          <h1 className="text-lg font-bold">Target</h1>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-gray-500 mr-2"></div>
              <p>Achieved</p>
            </div>
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-gray-300 mr-2"></div>
              <p>Remaining</p>
            </div>
          </div>
          <div className="h-64">
            <GaugeComponent />
          </div>
        </div>

        {/* Most Active Account Type (Polar) */}
        <div className="bg-white p-5 row-span-12 md:col-span-2 lg:col-span-1">
          <h1 className="text-lg font-bold pb-2">Most Active Account Type</h1>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-gray-500 mr-2"></div>
              <p>Very Active</p>
            </div>
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-gray-300 mr-2"></div>
              <p>Inactive</p>
            </div>
          </div>
          <div className="">
            <Polar />
          </div>
        </div>

        {/* Country Image */}
        <div className="bg-white p-5 row-span-12 md:col-span-2 lg:col-span-2 flex flex-col items-center">
          <h1 className="text-lg font-bold pb-2">Country Statistics</h1>
          <div className="flex pt-3 justify-center">
            <img src="./images/country.png" alt="Country Stats" />
          </div>
        </div>

        {/* Users Country */}
        <div className="bg-white p-5 col-span-1 md:col-span-2 lg:col-span-2 row-span-12">
          <UsersCountry />
        </div>

        {/* Radar and List */}
        <div className="bg-white p-5 col-span-1 md:col-span-2 lg:col-span-2 row-span-12 flex flex-col">
          <h1 className="text-lg font-bold pb-2">Most Active Account Type</h1>
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <Radar />
            </div>
            <div className="w-full md:w-1/2 flex flex-col pl-0 md:pl-4">
              <ul className="list-none p-0 m-0">
                <li className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-600 rounded-full mr-1"></div>
                    <p className="text-sm">User Name</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-1 font-light">$1.2M</p>
                    <span className="text-gray-600 bg-gray-200 p-2 rounded-full text-xs ml-2">
                      +8.2%
                    </span>
                  </div>
                </li>
                <li className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mr-1"></div>
                    <p>User Name</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-1 font-light ">$1.2M</p>
                    <span className="text-gray-600 bg-gray-200 p-2 rounded-full text-xs ml-2 ">
                      +8.2%
                    </span>
                  </div>
                </li>
                <li className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-1"></div>
                    <p>User Name</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-1 font-light ">$1.2M</p>
                    <span className="text-white bg-gray-600  p-2 rounded-full text-xs ml-2 ">
                      -6.0%
                    </span>
                  </div>
                </li>
                <li className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300  rounded-full mr-1"></div>
                    <p>User Name</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-1 font-light ">$1.2M</p>
                    <span className="text-gray-600 bg-gray-200 p-2 rounded-full text-xs ml-2 ">
                      +8.2%
                    </span>
                  </div>
                </li>
                <li className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300  rounded-full mr-1"></div>
                    <p>User Name</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-1 font-light ">$1.2M</p>
                    <span className="text-gray-600 bg-gray-200 p-2 rounded-full text-xs ml-2 ">
                      +8.2%
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
