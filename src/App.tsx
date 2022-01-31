import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from "./Context/AuthContext";

import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/home/telzir' element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}