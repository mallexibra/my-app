import LabelForm from "@/src/components/labelForm";

const AddTask = () => {
  return (
    <main className="w-full lg:max-w-3xl lg:mx-auto text-white p-7">
      <h1 className="text-center font-bold text-2xl">Task Page</h1>
      <form className="flex flex-col gap-3" action="">
        <LabelForm
          label={"Tittle"}
          name={"tittle"}
          bgColor="bg-stone-700"
          type={"text"}
        >
          Title task...
        </LabelForm>
        <label className="flex flex-col" htmlFor="description">
          <span className="font-semibold text-sky-400">Description</span>
          <textarea
            className="outline-none w-full bg-stone-700 text-sky-800 placeholder:italic placeholder:text-sky-300 border-2 border-sky-400 p-2 rounded-md text-xs"
            name="description"
            rows={5}
            id="description"
          ></textarea>
        </label>
        <label className="flex flex-col" htmlFor="selectContact">
          <span className="font-semibold text-sky-400">Contact</span>
          <select
            className="outline-none w-full bg-stone-700 text-white font-semibold border-2 border-sky-400 p-2 rounded-md text-xs"
            name="selectContact"
            id="selectContact"
          >
            <option value="">Select Your Contact</option>
            <option value="Rudi">Rudi</option>
            <option value="Joko">Joko</option>
            <option value="Joko">Andi</option>
          </select>
        </label>
        <LabelForm
          label={"Date Time"}
          name={"date"}
          bgColor="bg-stone-700"
          color="text-wgite"
          type={"date"}
        ></LabelForm>
        <label className="flex flex-col" htmlFor="selectContact">
          <span className="font-semibold text-sky-400">Priority</span>
          <select
            className="outline-none w-full bg-stone-700 text-white font-semibold border-2 border-sky-400 p-2 rounded-md text-xs"
            name="selectContact"
            id="selectContact"
          >
            <option value="">Select Task Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <LabelForm
          label={"Reminder"}
          name={"reminder"}
          bgColor="bg-stone-700"
          color="text-white"
          type={"date"}
        ></LabelForm>
        <button
          className="text-center font-bold bg-sky-700 w-full rounded-md p-2"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </main>
  );
};

export default AddTask;
