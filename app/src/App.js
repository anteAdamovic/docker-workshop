import React from 'react';
import './App.css';

function App(props) {
  const { todos } = props;

  return (
    <div className="App">
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>TITLE</th>
            <th>COMPLETED</th>
          </tr>
        </thead>
        <tbody>
          {
            (todos && todos.length > 0) ?
              todos.map((todo, index) => {
                return (
                  <tr key={index}>
                    <td>{todo.id}</td>
                    <td>{todo.userId}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed}</td>
                  </tr>
                )
              }) : (
                <tr>
                  <td>No Data</td>
                  <td>No Data</td>
                  <td>No Data</td>
                  <td>No Data</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
