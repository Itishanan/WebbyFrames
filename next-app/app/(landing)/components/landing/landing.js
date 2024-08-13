"use client";
import Carousel from "./carousel";
import Link from "next/link";
import InfoLanding from "./infoLanding";

const LandingPage = () => {
  return (
    <>
      <section className="bg-gray-100 pt-5 h-screen flex flex-col md:flex-row">
        <div className="container w-full md:w-1/2 p-8 md:p-20 pt-0 flex flex-col justify-center">
          <h1 className="pb-5 text-black text-2xl md:text-3xl lg:text-4xl">
            Drive Business Growth & On Demand Experiences
          </h1>
          <p className="pb-5 pt-5 text-sm md:text-base lg:text-lg">
            Pellentesque convallis accumsan suscipit aliquet eu diam quis nulla
            turpis. In mus massa lectus laoreet sed semper bibendum id. Iaculis
            purus malesuada porttitor aliquam pulvinar. Mi congue convallis
            tincidunt lobortis amet ultricies phasellus porttitor.
          </p>
          <div className="flex gap-5 flex-row">
            <button className="bg-green-900 text-white h-14 w-full md:w-56 rounded-md flex justify-center items-center font-medium hover:bg-blue-800">
              <Link href="login">Start Free Trial</Link>
            </button>
            <button className="relative border hover:border-primary duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-full md:w-56 rounded-md bg-primary p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Discover More</p>
            </button>
          </div>
        </div>
        <div className="container w-full md:w-1/2 flex bg-center justify-start mt-10 md:mt-20 p-4">
          <div className="bg-gray-200 w-full h-[200px] md:h-[380px] rounded-lg">
            <div className="flex p-2 gap-1">
              <div>
                <span className="bg-gray-300 inline-block center w-3 h-3 rounded-xl hover:bg-orange-500"></span>
              </div>
              <div className="circle">
                <span className="bg-gray-300 inline-block center w-3 h-3 rounded-full hover:bg-orange-500"></span>
              </div>
              <div className="circle">
                <span className="bg-gray-300 box inline-block center w-3 h-3 rounded-full hover:bg-orange-500"></span>
              </div>
            </div>
            <div className="bg-contain bg-center mb-10 md:mb-20 h-full">
              <img
                className="w-full h-full object-cover rounded-bl-xl"
                src="/images/img3.jpg"
                alt="Abstract Image"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="m-4 md:ml-10 md:mr-10 md:mb-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl mt-5">
            Bibendum amet at molestie mattis.
          </h1>
          <p className="mt-4 md:mt-8">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis.
          </p>
        </div>
        <InfoLanding />
      </section>
      <section className="bg-gray-100 p-6 md:p-10 mt-10">
        <div>
          <p className="text-primary font-bold text-center text-xl">
            Testimonials
          </p>
          <h1 className="text-3xl md:text-5xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            amet at molestie mattis.
          </h1>
        </div>
        <Carousel />
      </section>
      <section className="p-6 md:p-10">
        <div className="p-6 md:p-10">
          <p className="text-primary font-bold text-xl">Caption</p>
          <h1 className="text-2xl md:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            amet at molestie mattis.
          </h1>
        </div>
        <div className="flex flex-row gap-5 p-6 md:p-10">
          <button className="btn-primary w-full md:w-auto">
            Primary Action
          </button>
          <button className="btn-outline w-full md:w-auto">
            Secondary Action
          </button>
        </div>
        <div className="pt-6 md:pt-10 p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
          <img
            className="w-full md:w-[540px] h-[260px]"
            src="/graphs/graph_1.png"
            alt="Graph"
          />
          <div className="ml-0 md:ml-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center w-full">
              <div className="border-2 border-gray-200 p-2 flex items-center">
                <div className="bg-gray-300 w-12 h-12 flex justify-center items-center">
                  <img
                    className="w-6 h-6"
                    src="/icons/mini/smiley.png"
                    alt="Happy"
                  />
                </div>
                <div className="flex flex-col text-start pl-2">
                  <h1 className="text-lg">250+</h1>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </div>
              <div className="border-2 border-gray-200 p-2 flex items-center">
                <div className="bg-gray-300 w-12 h-12 flex justify-center items-center">
                  <img
                    className="w-6 h-6"
                    src="/icons/mini/vector.png"
                    alt="Files"
                  />
                </div>
                <div className="flex flex-col text-start pl-2">
                  <h1 className="text-lg">600+</h1>
                  <p className="text-sm">Completed Projects</p>
                </div>
              </div>
              <div className="border-2 border-gray-200 p-2 flex items-center">
                <div className="bg-gray-300 w-12 h-12 flex justify-center items-center">
                  <img
                    className="w-6 h-6"
                    src="/icons/mini/pizza-slice.png"
                    alt="Vector"
                  />
                </div>
                <div className="flex flex-col text-start pl-2">
                  <h1 className="text-lg">1.8k+</h1>
                  <p className="text-sm">Available Resources</p>
                </div>
              </div>
              <div className="border-2 border-gray-200 p-2 flex items-center">
                <div className="bg-gray-300 w-12 h-12 flex justify-center items-center">
                  <img
                    className="w-6 h-6"
                    src="/icons/mini/users.png"
                    alt="Vector 1"
                  />
                </div>
                <div className="flex flex-col text-start pl-2">
                  <h1 className="text-lg">11k+</h1>
                  <p className="text-sm">Subscribers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-10 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-lg md:text-xl">Caption</p>
            <h1 className="text-2xl md:text-3xl">
              Bibendum amet at molestie mattis.
            </h1>
            <p className="text-sm md:text-base">
              Rhoncus morbi et augue nec, in id ullamcorper at sit.
            </p>
          </div>
          <div className="flex gap-4 md:gap-7 justify-end items-center">
            <button className="btn-outline w-full md:w-auto">
              Secondary Action
            </button>
            <button className="btn-primary w-full md:w-auto">
              Primary Action
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
