import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import About from './ProfileContainer/About/About';
import Blog from './ProfileContainer/Blog/Blog';
import Contact from './ProfileContainer/Contact/Contact';
import Footer from './ProfileContainer/Footer/Footer';
import Header from './ProfileContainer/Header/Header';
import Home from './ProfileContainer/Home/Home';
import NotFound from './ProfileContainer/NoFound/NotFound';
import Projects from './ProfileContainer/Projects/Projects';
import Skill from './ProfileContainer/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
        <Routes>
          <Route path="/skill" element={<Skill/>} />
        </Routes>
        <Routes>
          <Route path="/project" element={<Projects/>} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Routes>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
