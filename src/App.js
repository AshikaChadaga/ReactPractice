import './App.css';
import Props from './pages/props/Props';
import State from './pages/state/State';
import ClassComponent from './pages/class_component/ClassComponent';
import FunctionalComponent from './pages/functional_component/FunctionalComponent';

function App() {
  return (
    <div className="App">
      {/* <Props/> */}
      {/* <State/> */}
      {/* <ClassComponent/> */}
      <FunctionalComponent/>
    </div>
  );
}

export default App;
