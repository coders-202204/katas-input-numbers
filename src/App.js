import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number >= 10 ? 10 : number + 1);
  };

  const decrement = () => {
    setNumber(number <= 0 ? 0 : number - 1);
  };

  return (
    <>
      <Button text="+" action={increment} />
      <Input number={number} />
      <Button text="-" action={decrement} />
    </>
  );
}

export default App;
