import SignupForm from "./signupform";
const loginPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  ">
      <section
        className="h-1/6 lg:h-screen  bg-black "
        style={{
          height: 100,
        }}
      >
        <img
          className=" object-cover lg:h-screen w-full "
          src="./images/login.jpg"
        ></img>
      </section>
      <section>
        <SignupForm />
      </section>
    </div>
  );
};
export default loginPage;
