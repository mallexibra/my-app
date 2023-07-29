import Navbar from "@/src/components/navbar";
import Search from "@/src/components/search";
import Link from "next/link";

const Contact = () => {
  return (
    <main className="w-full lg:max-w-3xl lg:mx-auto text-white p-7">
      <h1 className="text-center font-bold text-2xl">Contact Page</h1>
      <Search />
      <div className="flex mt-10 w-full items-center gap-3">
        <span className="bg-green-700 block rounded-md p-2">
          <img width={20} height={20} src="/sort.png" alt="qr-icon" />
        </span>
        <span className="bg-green-700 block rounded-md p-2">
          <img width={20} height={20} src="/qr.png" alt="qr-icon" />
        </span>
        <span className="text-xs block p-2 rounded-md bg-green-700">
          Export Contact
        </span>
      </div>
      <div className="flex justify-center items-center my-5 flex-wrap gap-3">
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
        <div className="w-max">
          <span className="w-14 lg:w-20 lg:h-20 h-14 bg-white rounded-lg block"></span>
          <p className="text-xs text-center mt-1 w-full">Anita..</p>
        </div>
      </div>
      <Link href={"/contact/add"}>
        <h5 className="bg-sky-700 max-w-lg mx-auto hover:bg-sky-600 text-xs p-3 text-center rounded-lg font-bold">
          Add Contact
        </h5>
      </Link>
      <Navbar />
    </main>
  );
};

export default Contact;
