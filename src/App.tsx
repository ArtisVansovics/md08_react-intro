import React from 'react';
import './App.scss';
import Header from './components/header/header';
import { Button, ButtonRed } from './components/button/button';

const App = () => (
  <div className="App">
    <Header />
    <div className="App__container">
      <Button />
      <Button />
      <Button />
    </div>
    <div className="App__container">
      <ButtonRed text="Button 1" />
      <ButtonRed text="Button 2" />
      <ButtonRed text="Button 3" />
    </div>
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
