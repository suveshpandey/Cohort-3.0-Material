import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Dashboard } from "./components/Dashboard"
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';

const App = () => {
    return (
      <div className="h-[100vh]" >
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Routes>
        </Router>
      </div>
    )
}

export default App
