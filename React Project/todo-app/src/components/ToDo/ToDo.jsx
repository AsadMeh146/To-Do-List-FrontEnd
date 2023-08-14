import React, { useState } from "react";
import "../ToDo/todo.css";
import TaskTable from "../TaskTable/TaskTable";
// import { Modal, Button } from 'react-bootstrap';
import TaskModal from "../TaskModal/TaskModal";


export default function ToDo() {
  const [inputValue, setInputValues] = useState({
    name: "",
    description: "",
  });



  const [tasks,setTasks] = useState([
    {
          id:'1',
          name: 'Task Name 1',
          description: 'Description of Task 1',
          status:'Active'
        },
        {
          id:'2',
          name: 'Task Name 2',
          description: 'Description of Task 2',
          status:'Active'
        },
  ]);


  const [showCongratulationModal, setShowCongratulationModal] = useState(false);
  const [modalMessage,updateMessage] = useState("");

  const handleCloseCongratulationModal = () => {
    setShowCongratulationModal(false);
  };

  const addTask = (event) => 
  {
    event.preventDefault();

    const newTask = {

      id:tasks.length + 1,
      name:inputValue.name,
      description:inputValue.description,
      status:'Active'
    }
    setTasks([...tasks, newTask]);
    updateMessage("You added the task successfully. Best Of Luck.")
    setShowCongratulationModal(true);
    setInputValues({
      name: "",
      description: "",
    });

  };
  
  const handleCompleteTask = (taskId) => {
    
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: 'Completed' } : task
    );
    setTasks(updatedTasks);
    updateMessage("Congratulations! You completed the task.")
    setShowCongratulationModal(true);
  };
  

  // const tasks = [
  //   
  //   // Add more tasks as needed
  // ];

  const handleInputValues = (event) => {
    const { name, value } = event.target;
    setInputValues((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleDeleteTask = (taskId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };  
  return (
    <div className="container todoContainer">
      <div className="row p-3">
        <div className="col-md-12">
          <h3>Hello Asad Mehmood! Welcome To TaskTracker.</h3>
        </div>
      </div>
      <div className="container addtaskContainer">
      <div className="row mb-3">
          <div className="col-md-12">
            <h5>Add your Task</h5>
          </div>
        </div>
        <form onSubmit={addTask}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label for="exampleInputEmail1">Task Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={inputValue.name}
                onChange={handleInputValues}
                aria-describedby="emailHelp"
                placeholder="Enter task name"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for="exampleInputPassword1">Task Description</label>
              <input
                type="text"
                name="description"
                value={inputValue.description}
                onChange={handleInputValues}
                className="form-control"
                placeholder="Enter task description"
                required
              />
            </div>
          </div>
        </div>
        <div className="row px-5 my-3 ">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center">
              <button className="submit btn btn-primary" >Add Task</button>
            </div>
          </div>
        </div>

        </form>


      </div>

      <div className="container my-5">
      <h4 className="mb-4">Manage Your Tasks</h4>
      <TaskTable tasks={tasks}  onDeleteTask={handleDeleteTask} onCompletedTask={handleCompleteTask} />
      <TaskModal
        show={showCongratulationModal}
        onHide={handleCloseCongratulationModal}
        message={modalMessage}
      />
          {/* <Modal show={showCongratulationModal} onHide={handleCloseCongratulationModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Congratulations! You completed the task</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCongratulationModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal> */}
      </div>
    </div>
  );
}
