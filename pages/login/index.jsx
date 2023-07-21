import LabelForm from "@/src/components/labelForm";

const Login = () => {
  return (
    <div className="min-h-screen px-10 bg-sky-100 grid place-items-center">
      <div className="w-full md:max-w-lg p-5 rounded-lg shadow-lg bg-white text-sky-500">
        <h1 className="text-center mt-5 text-2xl font-bold">FORM LOGIN</h1>
        <p className="text-xs text-center mb-10">
          Please login with your account!
        </p>
        <form className="flex flex-col gap-3" action="">
          <LabelForm name={"email"} label={"Email"} type={"email"}>Input your email</LabelForm>
          <LabelForm name={"password"} label={"Password"} type={"password"}>Input your password</LabelForm>
          <button className="bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold">Login Now</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
