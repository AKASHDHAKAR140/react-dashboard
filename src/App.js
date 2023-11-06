import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutesPath from './routes';
function App() {
   return (
    <BrowserRouter>
     <RoutesPath/>
    </BrowserRouter>
  );
}

export default App;
