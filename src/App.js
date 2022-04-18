import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFund from "./Components/NotFound/NotFund";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/home" element={ <Home></Home> }></Route>
        <Route path="/login" element={ <Login></Login> }></Route>
        <Route path="/signup" element={ <Signup></Signup> }></Route>
        <Route path="*" element={ <NotFund></NotFund> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
