import { useState } from "react";

export default function NewTodo({ onAddTodo }) {
  const [enteredTodo, setEnteredTodo] = useState("");

  function handleChange(event) {
    setEnteredTodo(event.target.value);
  }

  function handleClick() {
    onAddTodo(enteredTodo);
    setEnteredTodo("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 border-gray-600 border p-1 focus:outline-none focus:border-gray-900"
        style={{ borderRadius: "8px" }}
        onChange={handleChange}
        value={enteredTodo}
      />
      <button
        className="bg-gray-400 px-2 py-1 md:text-base text-slate-50 sm:text-sm hover:bg-gray-300 hover:text-black w-[125px] h-[38px]"
        style={{ borderRadius: "8px" }}
        onClick={handleClick}
      >
        Tambah Todo
      </button>
    </div>
  );
}
