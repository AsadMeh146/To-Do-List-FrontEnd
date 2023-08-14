import React from 'react';
import './tasktable.css'; // Import your CSS file for styling

const TaskTable = ({ tasks , onDeleteTask , onCompletedTask}) => {
  return (
    <>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col" colSpan={2}>Action</th>

    </tr>
  </thead>
  <tbody>
  {tasks.map((task, index) => (
            <tr key={index}>
                <td>
                    {task.id}
                </td>
              <td>
                  {task.name}
              </td>
              <td>
                  {task.description}
              </td>
              <td>
                {task.status}
              </td>
              <td className="actions-cell">
                <button className='btn btn-outline-success mr-3'  onClick={() => onCompletedTask(task.id)}>Completed</button>
                <button className='btn btn-outline-danger mr-3' onClick={() => onDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr> */}
  </tbody>
</table>


</>
  );
};

export default TaskTable;
