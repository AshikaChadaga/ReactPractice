import './App.css';
import Props from './pages/props/Props';
import State from './pages/state/State';
import ClassComponent from './pages/class_component/ClassComponent';
import FunctionalComponent from './pages/functional_component/FunctionalComponent';
import ClassLifecycle from './pages/class_lifecycle/ClassLifecycle';
import FunctionLifecycle from './pages/function_lifecycle/FunctionLifecycle';
import ReactHooks from './pages/react_hooks/ReactHooks';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/props" element={<Props />}></Route>
          <Route path="/state" element={<State />}></Route>
          <Route path="/class-component" element={<ClassComponent />}></Route>
          <Route path="/functional-component" element={<FunctionalComponent />}></Route>
          <Route path="/class-lifecycle" element={<ClassLifecycle color="yellow" />}></Route>
          <Route path="/functional-lifecycle" element={<FunctionLifecycle />}></Route>
          <Route path="/react-hooks" element={<ReactHooks />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
