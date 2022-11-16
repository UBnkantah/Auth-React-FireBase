import { Routes, Route } from "react-router-dom"
import HomePage from "./Components/Pages/Home"
import Authenication from "./Components/Pages/Auth"
import SignUpPage from  "./Components/Pages/SignUp"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Authenication />} />
      <Route path="/sign-up" element={<SignUpPage/>} />
    </Routes>
  );
}

export default App;
