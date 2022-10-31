
const Summary = ({ data, slc}) => {
  console.log("daa", data, "slc", slc);
  const show = Object.keys(data).map((e, i) => (
    <>
      <tr key={i}>
        <th scope="row">{i}</th>
        <td>{e}</td>
        <td>{data[e]}</td>
      </tr>
    </>
  ));
  
  return (
    <>
     
      <div className="container-md">
        <h1>Summary</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Questions</th>
              <th scope="col">Answers</th>
            </tr>
          </thead>
          <tbody>{show}</tbody>
        </table>
      
      </div>
    </>
  );
};

export default Summary;
