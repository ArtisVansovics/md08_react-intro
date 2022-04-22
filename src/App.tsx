import React from 'react';
import './App.scss';
import Header from './components/header/header';
import { Button, ButtonRed } from './components/button/button';
import ImgFrame from './components/img-frame/img-frame';
import { Card, CardInfo } from './components/card/card';
import cat01 from './assets/images/cat01.jpg';
import cat02 from './assets/images/cat02.png';
import cat03 from './assets/images/cat03.jpg';
import cat04 from './assets/images/cat04.jpg';

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
    <div className="App__container">
      <ImgFrame srcPath={cat01} altName="cat01" />
      <ImgFrame srcPath={cat02} altName="cat02" />
      <ImgFrame srcPath={cat03} altName="cat03" />
      <ImgFrame srcPath={cat04} altName="cat04" />
    </div>
    <div className="App__container">
      <Card />
      <Card />
      <Card />
    </div>
    <div className="App__container">
      <CardInfo title="Title 1" text="Description 1..." />
      <CardInfo title="Title 2" text="Description 2..." />
      <CardInfo title="Title 3" text="Description 3..." />
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
