function TodoInput({
  textInput,
  completed,
  isEditing,
  setText,
}: {
  textInput: string;
  completed: boolean;
  isEditing: boolean;
  setText: (text: string) => void;
}) {
  return (
    <div
      className={`w-full shadow-md transition duration-300 ease-linear ${
        completed ? "shadow-green-500" : "shadow-slate-500"
      }  rounded-xl`}
      style={{ padding: ".8rem .5rem" }}
    >
      <input
        type="text"
        className="w-full h-full border-none outline-none"
        value={textInput}
        readOnly={!isEditing}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TodoInput;
