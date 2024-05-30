import Todo from "./Todo";

export default function SelectedProject({
  project,
  onDelete,
  onAddTodo,
  onDeleteTodo,
  todo,
}) {
  const formatDate = new Date(project.date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-gray-400">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-600">{project.judul}</h1>
          <button
            className="text-gray-600 hover:text-gray-900 outline w-[100px] border-gray-600"
            style={{ borderRadius: "8px" }}
            onClick={onDelete}
          >
            Hapus
          </button>
        </div>
        <p className="mb-b text-gray-600">{formatDate}</p>
        <p className="text-gray-900 whitespace-pre-wrap">{project.desc}</p>
      </header>
      <Todo onAddTodo={onAddTodo} onDeleteTodo={onDeleteTodo} todo={todo} />
    </div>
  );
}
