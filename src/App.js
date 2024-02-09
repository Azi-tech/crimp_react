// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import User from './Layouts/User';
import Header from './components/Headers/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footers/Footer';

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path="/about" element={<About />} />
      {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
      {/* <Route path="/user" render={(props) => <User {...props} />} /> */}
      {/* <Redirect from="/" to="/user/home" /> */}
      {/* <Route
        path="*"
        element={<Navigate to="/user/home" replace />}
    /> */}

    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
