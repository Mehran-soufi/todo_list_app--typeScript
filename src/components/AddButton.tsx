import { TodoType } from "../App";

function AddButton({
  textInput,
  setTodo,
  setTextinput,
}: {
  textInput: string;
  setTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setTextinput: React.Dispatch<React.SetStateAction<string>>;
}) {
   const addTaskHandler = () => {
    if (textInput.trim()) {
      setTodo((prev) => [
        ...prev,
        { textInput, completed: false, isEditing: false },
      ]);
      setTextinput("");
    }
  };

  return (
    <button
      className="w-1/5 cursor-pointer bg-cyan-800 rounded-lg transition duration-300 ease-linear
         hover:shadow-inner hover:shadow-cyan-800 hover:bg-cyan-950"
      style={{ padding: ".8rem .5rem" }}
      onClick={addTaskHandler}
    >
      add
    </button>
  );
}

export default AddButton;
