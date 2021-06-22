import './App.scss';
import Landing from './sections/Landing'
import About from './sections/About'
import Projects from './sections/Projects'
import SocialBar from './component/SocialBar'
import NavBar from './component/NavBar'



const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SocialBar />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
