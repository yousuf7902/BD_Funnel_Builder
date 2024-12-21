import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);


  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newTasks = [...allTask, task]; 
    setAllTask(newTasks); 

    localStorage.setItem("Tasks", JSON.stringify(newTasks)); 
    setTask(""); 
  };

  return (
    <>
      <div className="m-10 flex justify-center items-center flex-col gap-5">
        <h1 className='text-4xl font-bold'>To-Do-List App</h1>

        <form className="flex justify-center items-center flex-col gap-5 w-[50%]" onSubmit={formSubmitHandler}>
          <label className="text-2xl font-semibold">Add Task</label>
          <input
            type="text"
            name="text"
            className="border border-gray-500 w-full p-2"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="py-2 px-4 border border-gray-600 bg-slate-600 text-white rounded-md">Add</button>
        </form>

        <ul>
          {allTask.map((task, index) => (
            <li key={index}>{task}</li> 
          ))}
        </ul>

      </div>
    </>
  );
}

export default App;
