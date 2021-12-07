import './App.css';
import Props from './pages/props/Props';
import State from './pages/state/State';
import ClassComponent from './pages/class_component/ClassComponent';
import FunctionalComponent from './pages/functional_component/FunctionalComponent';
import ClassLifecycle from './pages/class_lifecycle/ClassLifecycle';

function App() {
  return (
    <div className="App">
      {/* <Props/> */}
      {/* <State/> */}
      {/* <ClassComponent/> */}
      {/* <FunctionalComponent/> */}
      <ClassLifecycle color="yellow"/>
    </div>
  );
}

export default App;
