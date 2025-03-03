import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <Navbar /> {/* Move Navbar outside Routes so it appears on all pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute> {/* Wrap Home with ProtectedRoute */}
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;