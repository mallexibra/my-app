import Navbar from "@/src/components/navbar";
import Search from "@/src/components/search";
import Link from "next/link";

const Contact = () => {
  return (
    <main className="w-full lg:w-max lg:mx-auto text-white p-7">
      <h1 className="text-center font-bold text-2xl">Contact Page</h1>
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
        <span className="p-2 text-xs rounded-md bg-green-700">Phonebook</span>
        <span className="p-2 text-xs rounded-md bg-green-700">Email</span>
        <span className="p-2 text-xs rounded-md bg-green-700">Scan</span>
        <span className="p-2 text-xs rounded-md bg-green-700">Message</span>
        <div className="flex-auto">
          <Search />
        </div>
      </div>
      <div className="flex justify-center items-center my-5 flex-wrap gap-3">
        <table
          cellPadding={8}
          class="border-collapse border border-slate-500 table-fixed"
        >
          <thead className="bg-sky-600">
            <tr>
              <th className="border border-slate-600">No</th>
              <th className="border border-slate-600">Nama</th>
              <th className="border border-slate-600">Phone</th>
              <th className="border border-slate-600">Phone Work</th>
              <th className="border border-slate-600">Home</th>
              <th className="border border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600">1</td>
              <td className="border border-slate-600">Malcolm Lockyer</td>
              <td className="border border-slate-600">08123456789</td>
              <td className="border border-slate-600">08123456789</td>
              <td className="border border-slate-600">08123456789</td>
              <td className="text-xs font-semibold border border-slate-600">
                <a href="#" className="py-1 px-3 mr-2 rounded-md bg-green-500">
                  Edit
                </a>
                <a href="#" className="py-1 px-3 rounded-md bg-rose-500">
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
