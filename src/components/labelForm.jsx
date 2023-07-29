const LabelForm = ({
  children,
  label,
  type,
  color = "text-sky-800",
  name,
  bgColor = "bg-white",
}) => {
  return (
    <label className="flex flex-col w-full" htmlFor={name}>
      <span className="font-semibold text-sky-400">{label}</span>
      <input
        className={`outline-none w-full ${bgColor} ${color} placeholder:italic placeholder:text-sky-300 border-2 border-sky-400 p-2 rounded-md text-xs`}
        placeholder={children}
        type={type}
        name={name}
        id={name}
      />
    </label>
  );
};

export default LabelForm;
