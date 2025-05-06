import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineDoneOutline, MdOutlineRemoveDone } from "react-icons/md";

function SectionButtons({
  completed,
  toggleComplete,
  removeTask,
  editTask,
  edit,
}: {
  completed: boolean;
  toggleComplete: () => void;
  removeTask: () => void;
  editTask: () => void;
  edit: boolean;
}) {
  return (
    <div
      className="w-full h-full flex justify-center items-center gap-1"
      style={{ padding: ".5rem" }}
    >
      {edit ? (
        <button
          className="bg-purple-600 rounded-lg w-full h-full cursor-pointer  transition duration-300 ease-linear hover:scale-95"
          style={{ padding: ".7rem .5rem" }}
          onClick={editTask}
        >
          complete edit
        </button>
      ) : (
        <>
          <button
            className="flex justify-center items-center rounded-lg bg-rose-500 w-1/3 h-full cursor-pointer 
      transition duration-300 ease-linear hover:scale-95"
            style={{ padding: ".8rem .5rem" }}
            onClick={removeTask}
          >
            <FaTrashAlt />
          </button>
          <button
            className="flex justify-center items-center rounded-lg bg-yellow-500 w-1/3 h-full cursor-pointer 
      transition duration-300 ease-linear hover:scale-95"
            style={{ padding: ".8rem .5rem" }}
            onClick={editTask}
          >
            <FaEdit />
          </button>
          {completed ? (
            <button
              className="flex justify-center items-center rounded-lg bg-slate-500 w-1/3 h-full cursor-pointer 
      transition duration-300 ease-linear hover:scale-95"
              style={{ padding: ".8rem .5rem" }}
              onClick={toggleComplete}
            >
              <MdOutlineRemoveDone />
            </button>
          ) : (
            <button
              className="flex justify-center items-center rounded-lg bg-green-500 w-1/3 h-full cursor-pointer 
    transition duration-300 ease-linear hover:scale-95"
              style={{ padding: ".8rem .5rem" }}
              onClick={toggleComplete}
            >
              <MdOutlineDoneOutline />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default SectionButtons;
