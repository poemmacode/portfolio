import { Player } from '@lottiefiles/react-lottie-player';

import { Header } from "./components/Header";
import { HeroArea } from "./components/HeroArea";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ProjectList } from "./components/Project";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from './components/ScrollToTopButton'
import "./index.css";

export default function App() {

  return (
    <div className="App">
       <Player
        src='https://lottie.host/a0e48f1d-17b9-4157-94eb-cd7aeec75971/7hIoQIlJlX.json'
        className="player"
        loop
        autoplay
      />
      <ScrollToTopButton />
      <Header />
      <HeroArea />
      <h1 id="about" className="title">
        About me
      </h1>
      <p className="description">My experience and education</p>
      <About />
      <h1 id="services" className="title">
        My services
      </h1>
      <p className="description">How can I help you</p>
      <Services />
      <h1 id="projects" className="title">
        Projects
      </h1>
      <p className="description">Highlights of my best work</p>
      <ProjectList />
      <h1 id="resume" className="title">
        My resume
      </h1>
      <p className="description">You can find my full resume <a className="link" href="https://resume.io/r/y92352s0L" target="_blank" rel="noreferrer"><strong><u>here</u></strong></a></p>

      <h1 id="contact" className="title">
        Inspire Innovation: Let's Connect!
      </h1>
      <p className="description">I'm Here to Help.  Together, we can bring your vision to life!</p>
      <Contacts />
      <Footer />

    </div>
  );
}
