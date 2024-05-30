import NewTodo from "./NewTodo";

export default function Todo({ todo, onAddTodo, onDeleteTodo }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-600 mb-4">TODO</h2>
      <NewTodo onAddTodo={onAddTodo} />
      {todo.length === 0 && <p className="text-gray-700">Tidak ada todo</p>}
      {todo.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-gray-400">
          {todo.map((td) => (
            <li key={td.id} className="flex justify-between my-1">
              <span>{td.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTodo(td.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
