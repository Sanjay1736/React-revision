import './App.css';
import { AppV3 } from './Components/AppV3';
import { FirstClassComp } from './Lifecycles/FirstClassComp';
import { Mounting } from './Lifecycles/Mounting';
// jsx Stand for JavaScriptXml
//if we want use we have some Certianss rules:
//1)Functional component should Should always start with capital letter
//2)onclick(), in jsx we onClick={}
function App() {
  
  return (
    <div className="App">
      <AppV3 />
      <FirstClassComp />
      <Mounting/>
    </div>
  
  );
}

export default App;
