import Button from "./Button";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={classes.title}>Welcome back React.js!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
