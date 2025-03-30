import React,{useState} from 'react'

function TodoReact() {
  const [task,setTask] = useState(['miso is sleeping']);
  const [newTask,setNewTask] = useState("");

  const handleOnChange = (e) => {
    setNewTask(e.target.value);
  }
  function addList() {
    if(newTask.trim() != '') {
      setTask(t=>[...t,newTask]);
      setNewTask("");
    }
  }

  function keyPress(e) {
    if(e.key === "Enter") {
      addList();
    }
  }
  function deleteTask(index) {
    const updateTask = task.filter((_,i)=> i !== index);
    setTask(updateTask);
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
  <h1 className="text-2xl font-bold text-gray-800 mb-6">To Do List</h1>
  
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <div className="flex mb-4">
      <input 
        type="text" 
        onChange={handleOnChange} 
        onKeyPress={keyPress} 
        placeholder="Add the tasks" 
        className="flex-grow px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        onClick={addList} 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r transition-colors"
      >
        Add Task
      </button>
    </div>

    <ul className="space-y-2">
      {task.map((item, index) => (
        <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
          <span className="text-gray-800">{item}</span>
          <div className="taskButton">
            <button 
              onClick={() => deleteTask(index)} 
              className="ml-2 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>
        </>
  )
}

export default TodoReact
