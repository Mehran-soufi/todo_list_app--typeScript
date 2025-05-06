import { useEffect, useState } from "react";
import AddButton from "./components/AddButton";
import Input from "./components/Input";
import SectionButtons from "./components/SectionButtons";
import TodoInput from "./components/TodoInput";

export interface TodoType {
  textInput: string;
  completed: boolean;
  isEditing: boolean;
}
function App() {
  const [textInput, setTextinput] = useState<string>("");
  const [todo, setTodo] = useState<TodoType[]>(() => {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-11/12 sm:w-4/5 lg:w-3/5 h-4/5 flex items-center flex-col gap-8 rounded-xl overflow-hidden">
        <div className="w-11/12 flex justify-center items-center">
          <h1
            className="lg:text-6xl sm:text-4xl text-3xl font-bold bg-gradient-to-br from-pink-700 via-purple-700 to-cyan-700
          inline-block text-transparent bg-clip-text select-none
          "
          >
            Todo List App
          </h1>
        </div>
        <div className="w-11/12 h-1/12 flex justify-center items-center gap-2">
          <Input
            setTextinput={setTextinput}
            textInput={textInput}
            addTaskHandler={() => {
              if (textInput.trim()) {
                setTodo((prev) => [
                  ...prev,
                  { textInput, completed: false, isEditing: false },
                ]);
                setTextinput("");
              }
            }}
          />
          <AddButton
            textInput={textInput}
            setTodo={setTodo}
            setTextinput={setTextinput}
          />
        </div>
        {todo.length > 0 ? (
          <div
            className="w-11/12 h-11/12 flex justify-start items-center flex-col gap-2
           rounded-xl shadow-lg shadow-zinc-800 overflow-y-auto"
            style={{ padding: ".5rem" }}
          >
            {todo.map((item, index) => (
              <div
                className="w-full flex justify-center items-center flex-col md:flex-row"
                key={index}
              >
                <div className="md:w-4/5 w-full">
                  <TodoInput
                    textInput={item.textInput}
                    completed={item.completed}
                    isEditing={item.isEditing}
                    setText={(text) => {
                      setTodo((prev) =>
                        prev.map((t, i) =>
                          i === index ? { ...t, textInput: text } : t
                        )
                      );
                    }}
                  />
                </div>
                <div className="md:w-1/5 w-full">
                  <SectionButtons
                    completed={item.completed}
                    toggleComplete={() => {
                      setTodo((prev) =>
                        prev.map((t, i) =>
                          i === index ? { ...t, completed: !t.completed } : t
                        )
                      );
                    }}
                    removeTask={() => {
                      setTodo((prev) => prev.filter((_, i) => i !== index));
                    }}
                    editTask={() => {
                      setTodo((prev) =>
                        prev.map((t, i) =>
                          i === index ? { ...t, isEditing: !t.isEditing } : t
                        )
                      );
                    }}
                    edit={item.isEditing}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-11/12 h-11/12 flex justify-center items-center">
            <p className="lg:text-3xl sm:text-2xl text-xl text-rose-500">
              The Task List is Empty!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
