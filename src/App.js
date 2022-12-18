import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import CLH from "./Croutes/CLH";
import C1 from "./Croutes/C1";
import C2 from "./Croutes/C2";
import C3 from "./Croutes/C3";
import C4 from "./Croutes/C4";
import C5 from "./Croutes/C5";
import C6 from "./Croutes/C6";
import C7 from "./Croutes/C7";
import C8 from "./Croutes/C8";
import C9 from "./Croutes/C9";
import RubyLH from "./Rubyroutes/RubyLH";
import Ru1 from "./Rubyroutes/Ru1";
import Ru2 from "./Rubyroutes/Ru2";
import Ru3 from "./Rubyroutes/Ru3";
import Ru4 from "./Rubyroutes/Ru4";
import Ru5 from "./Rubyroutes/Ru5";
import Ru6 from "./Rubyroutes/Ru6";
import Ru7 from "./Rubyroutes/Ru7";
import Ru8 from "./Rubyroutes/Ru8";
import JavaLH from "./Javaroutes/JavaLH";
import J1 from "./Javaroutes/J1";
import J2 from "./Javaroutes/J2";
import J3 from "./Javaroutes/J3";
import J4 from "./Javaroutes/J4";
import J5 from "./Javaroutes/J5";
import J6 from "./Javaroutes/J6";
import J7 from "./Javaroutes/J7";
import J8 from "./Javaroutes/J8";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/lessons" element={<Project />}/>
      <Route path="/login" element= {<Login />}/>
      <Route path="/lessons/java" element= {<JavaLH />}/>
      <Route path="/lessons/ruby" element= {<RubyLH />}/>
      <Route path="/lessons/c" element= {<CLH />}/>
      <Route path="/lessons/c/c1" element= {<C1 />}/>
      <Route path="/lessons/c/c2" element= {<C2 />}/>
      <Route path="/lessons/c/c3" element= {<C3 />}/>
      <Route path="/lessons/c/c4" element= {<C4 />}/>
      <Route path="/lessons/c/c5" element= {<C5 />}/>
      <Route path="/lessons/c/c6" element= {<C6 />}/>
      <Route path="/lessons/c/c7" element= {<C7 />}/>
      <Route path="/lessons/c/c8" element= {<C8 />}/>
      <Route path="/lessons/c/c9" element= {<C9 />}/>
      <Route path="/lessons/ruby/ru1" element= {<Ru1 />}/>
      <Route path="/lessons/ruby/ru2" element= {<Ru2 />}/>
      <Route path="/lessons/ruby/ru3" element= {<Ru3 />}/>
      <Route path="/lessons/ruby/ru4" element= {<Ru4 />}/>
      <Route path="/lessons/ruby/ru5" element= {<Ru5 />}/>
      <Route path="/lessons/ruby/ru6" element= {<Ru6 />}/>
      <Route path="/lessons/ruby/ru7" element= {<Ru7 />}/>
      <Route path="/lessons/ruby/ru8" element= {<Ru8 />}/>
      <Route path="/lessons/java/j1" element= {<J1 />}/>
      <Route path="/lessons/java/j2" element= {<J2 />}/>
      <Route path="/lessons/java/j3" element= {<J3 />}/>
      <Route path="/lessons/java/j4" element= {<J4 />}/>
      <Route path="/lessons/java/j5" element= {<J5 />}/>
      <Route path="/lessons/java/j6" element= {<J6 />}/>
      <Route path="/lessons/java/j7" element= {<J7 />}/>
      <Route path="/lessons/java/j8" element= {<J8 />}/>
    </Routes>
    </>
  );
}

export default App;
