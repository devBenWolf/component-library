
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FormComponents from './pages/FormComponents';
import Nav from './pages/Nav';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/nav-component" element={<Nav />} />
            <Route path="/form-components" element={<FormComponents />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
