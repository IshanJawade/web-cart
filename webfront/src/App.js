import { 
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Blogs from "./screens/Blogs";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ContactUs from "./screens/ContactUs";
import Signup from "./screens/Signup";
import PostBlog from "./screens/PostBlog";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element= {<Home /> } />
          <Route exact path="/blogs" element= {<Blogs /> } />
          <Route exact path="/postblog" element= {<PostBlog/> } />
          <Route exact path="/login" element= {<Login /> } />
          <Route exact path="/signup" element= {<Signup /> } />
          <Route exact path="/contact" element= {<ContactUs/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
