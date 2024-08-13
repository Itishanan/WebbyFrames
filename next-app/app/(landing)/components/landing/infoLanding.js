const InfoLanding = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 md:gap-20 pt-5 text-center">
      <div className="border-2 border-gray-200 p-5 w-full sm:w-1/2 md:w-1/5 flex flex-col items-center justify-center">
        <img className="w-15 h-15 mb-2" src="/icons/smiley.png" alt="Happy" />
        <h1 className="text-xl">250+</h1>
        <p>Happy Customers</p>
      </div>
      <div className="border-2 border-gray-200 p-5 w-full sm:w-1/2 md:w-1/5 flex flex-col items-center justify-center">
        <img className="w-15 h-15 mb-2" src="/icons/files.png" alt="Files" />
        <h1 className="text-xl">600+</h1>
        <p>Completed Projects</p>
      </div>
      <div className="border-2 border-gray-200 p-5 w-full sm:w-1/2 md:w-1/5 flex flex-col items-center justify-center">
        <img className="w-15 h-15 mb-2" src="/icons/vector.png" alt="Vector" />
        <h1 className="text-xl">1.8k+</h1>
        <p>Available Resources</p>
      </div>
      <div className="border-2 border-gray-200 p-5 w-full sm:w-1/2 md:w-1/5 flex flex-col items-center justify-center">
        <img
          className="w-15 h-10 mb-3"
          src="/icons/vector-1.png"
          alt="Vector 1"
        />
        <h1 className="text-xl">11k+</h1>
        <p>Subscribers</p>
      </div>
    </div>
  );
};

export default InfoLanding;
