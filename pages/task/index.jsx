import Link from "next/link";

const Task = () => {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 lg:mx-auto">
      <div className="grid place-items-center">
        <div className="bg-white w-80 h-64 rounded-xl border-2 border-sky-600 shadow-lg"></div>
      </div>
      <div className="grid place-items-center">
        <div className="bg-white w-9/12 mx-auto p-2 cursor-pointer flex gap-3 items-center rounded-lg border-l-8 border-l-sky-600">
          <div className="grid place-items-center border rounded-full p-1">
            <img width={30} src="/person.png" alt="person-icon" />
          </div>
          <div>
            <p className="text-xs font-semibold opacity-40">Related to</p>
            <h1 className="flex items-center gap-3 font-bold">
              Adinda Istika <img width={20} src="/arrow.png" alt="arrow" />
            </h1>
          </div>
        </div>
      </div>
      <main className="col-start-2 text-white p-7">
        {/* <h1 className="text-center font-bold text-2xl">Task Page</h1> */}
        <div className="my-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="bg-green-700 w-max block rounded-md p-2">
              <img width={20} height={20} src="/sort.png" alt="qr-icon" />
            </span>
            <Link href={"/task/add"}>
              <span className="block text-center font-bold bg-sky-700 rounded-md p-2">
                Add Task
              </span>
            </Link>
          </div>
          <div className="bg-sky-100 text-sky-700 flex items-center gap-3 p-2 rounded-md">
            <input type="checkbox" defaultChecked name="check" id="check" />
            <div>
              <h1 className="text-lg font-bold">
                Task 1{" "}
                <span className="bg-green-600/40 mr-2 text-white py-1 px-3 rounded-full outline-1 outline-green-600 text-xs font-normal">
                  Finished
                </span>
                <span className="bg-green-600/40 text-white py-1 px-3 rounded-full outline-1 outline-green-600 text-xs font-normal">
                  20/7/2023
                </span>
              </h1>
              <p className="my-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, aperiam!
              </p>
              <p className="text-xs">
                Contact : Rudi{" "}
                <span className="bg-slate-600/40 rounded-full text-white py-1 px-3">
                  Reminder : 20/7/2023 04.00 AM
                </span>
              </p>
            </div>
          </div>
          <div className="bg-sky-100 text-sky-700 flex items-center gap-3 p-2 rounded-md">
            <input type="checkbox" name="check" id="check" />
            <div>
              <h1 className="text-lg font-bold">
                Task 1{" "}
                <span className="bg-rose-600/40 mr-2 text-white py-1 px-3 rounded-full outline-1 outline-rose-600 text-xs font-normal">
                  Unfinished
                </span>
                <span className="bg-green-600/40 text-white py-1 px-3 rounded-full outline-1 outline-green-600 text-xs font-normal">
                  20/7/2023
                </span>
              </h1>
              <p className="my-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, aperiam!
              </p>
              <p className="text-xs">
                Contact : Rudi{" "}
                <span className="bg-slate-600/40 rounded-full text-white py-1 px-3">
                  Reminder : 20/7/2023 04.00 AM
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Task;
