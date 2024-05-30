import { useState, useEffect } from "react";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import Sidebar from "./component/Sidebar";
import SelectedProject from "./component/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    todo: [],
  });

  useEffect(() => {
    localStorage.setItem("projectState", JSON.stringify(projectState));
  }, [projectState]);

  function handleAddTodo(text) {
    setProjectState((prevState) => {
      const todoId = Math.random();
      const newTodo = {
        text: text,
        projectId: prevState.selectedProject,
        id: todoId,
      };
      return {
        ...prevState,
        todo: [newTodo, ...prevState.todo],
      };
    });
  }

  function handleDeleteTodo(todoId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        todo: prevState.todo.filter((td) => td.id !== todoId),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTodo={handleAddTodo}
      onDeleteTodo={handleDeleteTodo}
      todo={projectState.todo.filter(
        (td) => td.projectId === projectState.selectedProject
      )}
    />
  );

  if (projectState.selectedProject === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <Sidebar
        onSelected={handleSelectedProject}
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        selectedProject={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
