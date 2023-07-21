import LabelForm from "@/src/components/labelForm";

const Signup = () => {
    return (
      <div className="min-h-screen px-10 bg-sky-100 grid place-items-center">
        <div className="w-full md:max-w-lg p-5 rounded-lg shadow-lg bg-white text-sky-500">
          <h1 className="text-center mt-5 text-2xl font-bold">FORM SIGNUP</h1>
          <p className="text-xs text-center mb-10">
            Please signup for your account!
          </p>
          <form className="flex flex-col gap-3" action="">
            <div className="flex w-full gap-3">
            <LabelForm name={"firstname"} label={"firstname"} type={"text"}>First Name</LabelForm>
            <LabelForm name={"lastname"} label={"lastname"} type={"text"}>Last Name</LabelForm>
            </div>
            <LabelForm name={"username"} label={"username"} type={"text"}>Input your username</LabelForm>
            <LabelForm name={"email"} label={"Email"} type={"email"}>Input your email</LabelForm>
            <LabelForm name={"password"} label={"Password"} type={"password"}>Input your password</LabelForm>
            <button className="bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold">Signup Now</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Signup;
  