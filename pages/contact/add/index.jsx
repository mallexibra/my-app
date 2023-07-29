import LabelForm from "@/src/components/labelForm";

const AddContact = () => {
  return (
    <main className="w-full lg:max-w-3xl lg:mx-auto text-white p-7">
      <h1 className="text-center font-bold text-2xl">Add Contact</h1>
      <div>
        <div className="flex items-center gap-3 text-xs mt-8">
          <h1>Import from:</h1>
          <span className="p-2 rounded-md bg-sky-700">phonebook</span>
          <span className="p-2 rounded-md bg-green-700">email</span>
        </div>
        <form className="mt-5 flex flex-col gap-3" action="">
          <div className="flex gap-3">
            <LabelForm
              label={"First Name"}
              type={"text"}
              name={"firstName"}
              bgColor="bg-stone-700"
            >
              First Name...
            </LabelForm>
            <LabelForm
              label={"Last Name"}
              type={"text"}
              name={"lastName"}
              bgColor="bg-stone-700"
            >
              Last Name...
            </LabelForm>
          </div>
          <LabelForm
            label={"Phone number"}
            type={"text"}
            name={"phoneNumber"}
            bgColor="bg-stone-700"
          >
            Phone number ...
          </LabelForm>
          <LabelForm
            label={"Work phone number"}
            type={"text"}
            name={"workPhoneNumber"}
            bgColor="bg-stone-700"
          >
            Work phone number ...
          </LabelForm>
          <LabelForm
            label={"Home phone number"}
            type={"text"}
            name={"homePhoneNumber"}
            bgColor="bg-stone-700"
          >
            Home phone number ...
          </LabelForm>
          <LabelForm
            label={"Email"}
            type={"text"}
            name={"homePhoneNumber"}
            bgColor="bg-stone-700"
          >
            Email ...
          </LabelForm>
          <label className="flex flex-col w-full" htmlFor="category">
            <span className="font-semibold text-sky-400">Category</span>
            <select
              className="bg-stone-700 border-2 border-sky-700 p-2 rounded-md outline-none"
              name="actegory"
              id="category"
            >
              <option value="prospects">prospects</option>
              <option value="team">team</option>
              <option value="client">client</option>
            </select>
          </label>
          <button
            className="bg-sky-600 p-2 rounded-md font-semibold"
            type="submit"
          >
            Add Contact
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddContact;
