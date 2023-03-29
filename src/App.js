import logo from './logo.svg';
import './App.css';
import StudentApp from './Components/StudentApp';
import { Route, Routes } from 'react-router-dom'; 
import Add from './Components/Add';
import View from './Components/View';

function App() {
  return (
    <div className="App"> 
    <navbar/>
      <StudentApp/>
      <Routes>
        <Route path={'/view'} element={<Viewstudents >>
        <Route path={'/add' }element={<Addstudents data={{ id: '',name: '',grade: ''}}method="post"/>
      </Routes>
    </div>
  );
}

export default App;
