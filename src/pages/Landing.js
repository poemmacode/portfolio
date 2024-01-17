import { Player } from '@lottiefiles/react-lottie-player';

import { Header } from "../components/Header";
import { HeroArea } from "../components/HeroArea";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { ProjectList } from "../components/Project";
import { Contacts } from "../components/Contacts";
import { ScrollToTopButton } from '../components/ScrollToTopButton'
import { Footer } from '../components/Footer';
export const Landing = () =>{
  return (
    <div className="App">
      <Player
        src="https://lottie.host/a0e48f1d-17b9-4157-94eb-cd7aeec75971/7hIoQIlJlX.json"
        className="player-bg"
        loop
        autoplay
      />
      <ScrollToTopButton />
      <Header />
      <HeroArea />
      <h2 id="projects" className="title">
        My Experience
      </h2>
      <p className="description">Steps in My Professional Path</p>
      <ProjectList />
      <h2 id="about" className="title">
        About me
      </h2>
      <p className="description">Where I have worked and my education.</p>
      <About />
      <h2 id="services" className="title">
        My services
      </h2>
      <p className="description">How can I help you</p>
      <Services />

      <h2 id="resume" className="title">
        My resume
      </h2>
      <p className="description">
        You can find my full resume{" "}
        <a
          className="link"
          href="https://resume.io/r/y92352s0L"
          target="_blank"
          rel="noreferrer"
        >
          <strong>
            <u>here</u>
          </strong>
        </a>
      </p>

      <h2 id="contact" className="title">
        Inspire Innovation: Let's Connect!
      </h2>
      <p className="description">
        I'm Here to Help. Together, we can bring your vision to life!
      </p>
      <Contacts />
      <Footer />
    </div>
  );
}
