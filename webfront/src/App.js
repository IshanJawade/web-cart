import { 
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Blogs from "./screens/Blogs";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Cart from "./screens/Cart";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element= {<Home /> } />
          <Route exact path="/blogs" element= {<Blogs /> } />
          <Route exact path="/login" element= {<Login /> } />
          <Route exact path="/cart" element= {<Cart/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
