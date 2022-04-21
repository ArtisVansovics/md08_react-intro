import React from 'react';
import './App.scss';
import Header from './components/header/header';
import { Button, ButtonRed } from './components/button/button';
import ImgFrame from './components/img-frame/img-frame';

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
      <ImgFrame
        src="https://png.pngtree.com/element_our/png/20181009/thai-cat-cream-tabby-sitting-png_131622.jpg"
      />
      <ImgFrame
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RTvGVK-qPzm36I20BcCtPl-XARIzGfblxA&usqp=CAU"
      />
      <ImgFrame
        src="https://www.pngfind.com/pngs/m/311-3116406_cat-png-free-download-cute-cat-png-transparent.png"
      />
      <ImgFrame
        src="https://i.pinimg.com/564x/10/d9/63/10d9631abb9778072c1da264a6d4709a--cats.jpg"
      />
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
