function Input({
  setTextinput,
  textInput,
  addTaskHandler,
}: {
  setTextinput: React.Dispatch<React.SetStateAction<string>>;
  textInput: string;
  addTaskHandler: () => void;
}) {
  return (
    <input
      type="text"
      placeholder="add somthing..."
      className="w-4/5 border-none outline-none shadow-inner shadow-zinc-700 rounded-lg"
      style={{ padding: ".8rem .5rem" }}
      onChange={(e) => setTextinput(e.target.value)}
      value={textInput}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          addTaskHandler();
        }
      }}
    />
  );
}

export default Input;
