import './App.css';
  // COMPONENTS
  import Login from './Components/Login/LoginMain'
  import FormPassword from './Components/Login/Formpassword';
  // REACT ROUTER
  import { Routes,Route } from 'react-router-dom';
  import Registerform from './Components/Registration/Registerform'
  import Mainpage from './Components/Mainpage/Mainpage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<FormPassword></FormPassword>}></Route>
        <Route path='/registration' element={<Registerform></Registerform>}></Route>
        <Route path='/accounts/:userid' element={<Mainpage></Mainpage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
