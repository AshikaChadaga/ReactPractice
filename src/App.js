import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Props from './pages/props/Props';
import State from './pages/state/State';
import ClassComponent from './pages/class_component/ClassComponent';
import FunctionalComponent from './pages/functional_component/FunctionalComponent';
import ClassLifecycle from './pages/class_lifecycle/ClassLifecycle';
import FunctionLifecycle from './pages/function_lifecycle/FunctionLifecycle';
import ReactHooks from './pages/react_hooks/ReactHooks';
import Homepage from './pages/homepage/Homepage';
import ReactPortal from './components/react_portal/ReactPortal';
import Modal from './components/modal/Modal';
import HigherOrderComponent from './pages/higher_order_component/HigherOrderComponent';
import Profiler from './pages/react_proflier/ReactProfiler';

function App() {
  const showPortal = false;
  const [showModal, setShowModal] = useState(false);
  const [showBubbling, setShowBubbling] = useState(false);
  const [count, setCount] = useState(0);
  const handleShowMessageClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleShowBubblingClick = () => setShowBubbling(true);
  const handleCloseBubbling = () => setShowBubbling(false);
  const handleClick = () => {
    setCount(count + 1);
  }
  function Child() {
    return (
      <div className="modal">
        <Button style={{ marginRight: "30px" }} variant="contained">Click Me</Button>
        <Button onClick={handleCloseBubbling} variant="contained">Close</Button>
      </div>
    );
  }
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
          <Route path="/higher-order-components" element={<HigherOrderComponent />}></Route>
          <Route path="/profiler" element={<Profiler />}></Route>
        </Routes>
      </Router>
      {showPortal ?
        <div>
          <div
            style={{
              height: '100%',
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                maxWidth: 400,
                position: 'relative',
              }}
            >
              <h1>---------React Portal----------</h1>
              <h2>My App</h2>
              <p>
                This is an example of how you might use React.createPortal. I think
                it is a pretty neat API that is yet another awesome escape hatch
                that React provides for practical reasons. Sometimes you just need
                to render something completely outside the React Tree.
              </p>
              <Button onClick={handleShowMessageClick} variant="contained">Show Secret Modal</Button>
              {showModal ? (
                <ReactPortal onClose={handleCloseModal} handleClick={handleClick}>
                  This is the secret modal message!
                </ReactPortal>
              ) : null}
            </div>
          </div>
          <div onClick={handleClick}>
            <p>Number of clicks: {count}</p>
            <p>
              Open up the browser DevTools
              to observe that the button
              is not a child of the div
              with the onClick handler.
            </p>
            <Button onClick={handleShowBubblingClick} variant="contained">Demonstrate Portal Event Bubbling</Button>
            {showBubbling ? (<Modal>
              <Child />
            </Modal>
            ) : null}

          </div>
        </div>
        : null}
    </div>
  );
}

export default App;
