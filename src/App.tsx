import React from 'react';
import './App.scss';
import Heading from './components/heading/heading';

const App = () => (
  <div className="App">
    <Heading text="Hello 1" />
    <Heading text="Hello 2" />
  </div>
);

// App is component
// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit
//         {' '}
//         <code>src/App.tsx</code>
//         {' '}
//         and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

export default App;
