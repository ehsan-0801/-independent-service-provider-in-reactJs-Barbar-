import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFund from "./Components/NotFound/NotFund";
import Signup from "./Components/Signup/Signup";
import Checkout from "./Components/Checkout/Checkout";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/home" element={ <Home></Home> }></Route>
        <Route path="/login" element={ <Login></Login> }></Route>
        <Route path="/signup" element={ <Signup></Signup> }></Route>
        <Route path="/about" element={ <About></About> }></Route>
        <Route path="/blog" element={ <Blog></Blog> }></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={ <NotFund></NotFund> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
