import './App.css';
import {useDispatch , useSelector} from 'react-redux'
import {
  LoginPage,
  UsersPage
} from './pages'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
 
  return (
    // <div className="App">
    //  <UsersPage></UsersPage>

    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<LoginPage/>}/>
          <Route path="/app" element={<UsersPage />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;