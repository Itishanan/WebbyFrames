import LoginForm from "./loginform";

const loginPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 align-middle justify-center  ">
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
      <section className=" items-center justify-center min-h-screen m">
        <div className="align-middle justify-center ">
          <LoginForm />
        </div>
      </section>
    </div>
  );
};
export default loginPage;
