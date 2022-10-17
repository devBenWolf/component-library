
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './pages/Nav';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/nav-component" element={<Nav />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
