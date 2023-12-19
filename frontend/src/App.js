// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//App.js 

import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Todo from './components/Todo'; 


function App() { 
const headStyle = { 
	textAlign: "center", 
} 
return ( 
	<div> 
	<h1 style={headStyle}>Todo List</h1> 
	<BrowserRouter> 
		<Routes> 
		<Route path='/' element={<Todo/>}></Route> 
		</Routes> 
	</BrowserRouter> 
	</div> 
); 
} 

export default App;
