import React
 from "react";
const Dashboard = (props) => {
    
  return (
      <div>

<table class="table table-bordered">
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
    </tr>

  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{props.data.id}</td>
      <td>{props.data.username}</td>
      <td>{props.data.email}</td>
    </tr>
     </tbody>
      </table>
    

      </div>
  )
}

export default Dashboard;
