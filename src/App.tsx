import Biography from './components/Biography';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import { Navbar, Button } from 'flowbite-react';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="mx-auto">
      <header>
        <Navbar>
          <Navbar.Brand href="#">
            <span className="text-2xl font-bold">My Portfolio</span>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Link href="#biography">Biography</Navbar.Link>
            <Navbar.Link href="#skills">Skills</Navbar.Link>
            <Navbar.Link href="#projects">Projects</Navbar.Link>
            <Navbar.Link href="#training">Training</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <Introduction/>
        <Biography />
        <Skills />
        <Projects />
        <Training />
      </main>
    </div>
  );
}

export default App;
