import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './components/AddExpenseForm';
import Balance from './components/Balance';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import Expenses from './components/Expenses';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
      <h1 className='mt-3'>My Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'><Budget /></div>
        <div className='col-sm'><Balance /></div>
        <div className='col-sm'><Expenses /></div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'><ExpenseList /></div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'><AddExpenseForm /></div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;

//$$$$$$$$$$$$$$$$$$$

// // import logo from './logo.svg';
// // import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <p>Hello from React</p>
//   )
// }

// export default App;

//$$$$$$$$$$$$$$$$$$$$$$

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
