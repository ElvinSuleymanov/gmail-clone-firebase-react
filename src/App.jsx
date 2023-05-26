import './App.css';
  // COMPONENTS
  import Login from './Components/Login/LoginMain'
  import FormPassword from './Components/Login/Formpassword';
  // REACT ROUTER
  import { Routes,Route } from 'react-router-dom';
  import Registerform from './Components/Registration/Registerform'
  import Mainpage from './Components/Mainpage/Mainpage';
  import Maildetail from './Components/Mainpage/Mainpagecomponents/Maildetail';
  import Mailcontainer from './Components/Mainpage/Mainpagecomponents/Mailcontainer';
  import Searchbar from './Components/Mainpage/Mainpagecomponents/Search';
  import Sidebar from './Components/Mainpage/Mainpagecomponents/Sidebar';
  import { Outlet } from 'react-router-dom';
function App() {
  
  

    
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<FormPassword></FormPassword>}></Route>
        <Route path='/registration' element={<Registerform></Registerform>}></Route>

        <Route path='/accounts/:userid'>
          <Route index  element={<Mainpage></Mainpage>} ></Route>
          <Route path=':mailid' element={<Maildetail  x></Maildetail>}></Route>
        </Route>

        
        
         
        

        {/* <Route path='/accounts/:userid'>
          <Route index element={<Mainpage></Mainpage>}></Route>
          <Route path=':mailid'element={<Maildetail></Maildetail>}></Route>
        </Route> */}
        
      </Routes>
    </div>
  );
}
export default App;
