import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import About from './About/About';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Chat from './Chat/Chat';
import ContactMe from './Contact/ContactMe';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactMe />

        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
