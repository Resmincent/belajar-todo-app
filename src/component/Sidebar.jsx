import Button from "./Button";

const Sidebar = ({
  onStartAddProject,
  projects,
  onSelected,
  selectedProject,
}) => {
  return (
    <aside
      className="bg-gray-600 w-1/3 px-8 py-8 text-neutral-950 md:w-72 sm:w-1/3 rounded-r-xl"
      style={{ marginTop: "44px" }}
    >
      <h1 className="mb-8 font-bold uppercase md:text-xl sm:text-sm text-stone-200">
        Todo saya
      </h1>
      <div>
        <Button onClick={onStartAddProject}>+ Buat todo</Button>
        <ul className="mt-8">
          {projects.map((project) => {
            let styleCss =
              "w-full text-left px-2 py-1 rounded-md my-1 text-stone-200 hover:text-stone-400";
            if (project.id === selectedProject) {
              styleCss += "bg-gray-400 text-stone-400";
            } else {
              styleCss += "text-stone-200";
            }
            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelected(project.id)}
                  className={styleCss}
                >
                  {project.judul}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
