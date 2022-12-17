import "./App.css";
import React,{useState} from 'react'
import { AppV3 } from "./Components/AppV3";
import { FirstClassComp } from "./Lifecycles/FirstClassComp";
import { Mounting } from "./Lifecycles/Mounting";
import { Mounting1 } from "./Lifecycles/MountingV1";
// jsx Stand for JavaScriptXml
//if we want use we have some Certianss rules:
//1)Functional component should Should always start with capital letter
//2)onclick(), in jsx we onClick={}
function App() {
  const [theme, setTheme] = useState('light')
  const toggle = () => {
    
  }
  return (
    <div className="App">
      <AppV3 />
      <FirstClassComp />
      <Mounting />
      <Mounting1 surname='gudipudi' name='Sanjay'/>
      </div>
  );
}

export default App;
