import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Belajar1 from "./Components/Belajar1";
import Sidebar from "./Components/Sidebar";
import Inti from "./assets/Pages/Intin";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Belajar1 style={"bg-blue-400"}>ini adalah belajar 1</Belajar1> */}

      <Inti />
    </div>
  );
};

export default App;
