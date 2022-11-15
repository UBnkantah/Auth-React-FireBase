import { Routes, Route } from "react-router-dom"
import HomePage from "./Components/Pages/Home"
import SignInPage from "./Components/Pages/SignIn"
import SignUpPage from  "./Components/Pages/SignUp"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage/>} />
    </Routes>
  );
}

export default App;
