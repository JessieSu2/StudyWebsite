import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import './css/HomePage.css';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import TimeScreen from './pages/TimeScreenPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element ={<HomePage/>} /> 
      <Route path="/Home" element= {<HomePage/>} />
      <Route path="/TimeScreen" element = {<TimeScreen/>} />
      <Route path="*" element={<NoPage/>} />
    </Route>
  )
);

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
