import './App.css';
  // COMPONENTS
  import Login from './Components/Login/LoginMain'
  import FormPassword from './Components/Login/Formpassword';
  // REACT ROUTER
  import { Routes,Route } from 'react-router-dom';
  import Registerform from './Components/Registration/Registerform'
  // import Mainpage from './Components/Mainpage/Mainpage';
  // import Maildetail from './Components/Mainpage/Mainpagecomponents/Maildetail';
  import Mailcontainer from './Components/Mainpage/Mainpagecomponents/Mailcontainer';
  import Searchbar from './Components/Mainpage/Mainpagecomponents/Search';
  import Sidebar from './Components/Mainpage/Mainpagecomponents/Sidebar';
  import { Outlet } from 'react-router-dom';
  import { lazy,Suspense } from 'react';
  import Loading from './Components/Mainpage/Loading';
  import  ReactDOM  from 'react-dom';
  import SentInbox from './Components/Mainpage/Mainpagecomponents/Sentinbox';
import FavoritesMain from './Components/Mainpage/Favoritespage/Favoritesmain'
import { createPortal } from 'react-dom';
const Mainpage = lazy(() => import('./Components/Mainpage/Mainpage'))
const Maildetail = lazy(() => import('./Components/Mainpage/Mainpagecomponents/Maildetail'))



function App() {
   
  

    
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<FormPassword></FormPassword>}></Route>
        <Route path='/registration' element={<Registerform></Registerform>}></Route>

    
        <Route path='/accounts/:userid'>
          <Route index  element={<Suspense fallback={<Loading></Loading>}><Mainpage></Mainpage></Suspense>} ></Route>
          <Route  path='sent' element={<SentInbox></SentInbox>}></Route>  
          <Route path=':mailid' element={<Suspense><Maildetail></Maildetail></Suspense>}></Route>
          <Route path='favorites' element={<FavoritesMain></FavoritesMain>}></Route>
        </Route>
    
      </Routes>
    </div>
  );
}
export default App;
