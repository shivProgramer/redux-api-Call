import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "./features/gitUserSlice";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.app;
  });
  if (data.loading) {
    return <h2>loading .... </h2>;
  }
  if (data.error != null) {
    return <h3>{data.error}</h3>;
  }
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <button onClick={() => dispatch(getAllData())}>Get GitHub Users</button>
      <ul>
        {data.users.map((ele) => (
          <li key={ele.id}>{ele.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
